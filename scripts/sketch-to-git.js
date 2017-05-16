const promisify = require('es6-promisify');
const glob = promisify(require('glob'));
const rimraf = promisify(require('rimraf'));
const extractZip = promisify(require('extract-zip'));
const rewriteFiles = promisify(require('rewrite-files').withPattern);
const chalk = require('chalk');
const path = require('path');

glob('**/*.sketch').then(sketchFiles => {
  sketchFiles.forEach(sketchFile => {
    const targetPath = getTargetPath(sketchFile);

    rimraf(targetPath).then(() => {
      extractZip(sketchFile, { dir: targetPath }).then(() => {
        rewriteFiles('**/*__sketch/**/*.json', prettyJsonTransformer).then(() => {
          console.log(chalk.green(`[💎 ] ${path.basename(sketchFile)} is now ready for git!`));
        });
      });
    });
  });
});

function getTargetPath(file) {
  const documentName = path.basename(file, '.sketch');
  const sourcePath = path.dirname(file);
  const targetDir = `${documentName}__sketch`;

  return path.join(process.cwd(), sourcePath, targetDir);
}

function prettyJsonTransformer(fileName, contents, callback) {
  const parsedJson = JSON.parse(contents);
  const prettyJson = JSON.stringify(parsedJson, null, 2);

  callback(null, prettyJson);
}
