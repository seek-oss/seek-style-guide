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
    const relativePath = path.relative(process.cwd(), targetPath);

    rimraf(targetPath).then(() => {
      extractZip(sketchFile, { dir: targetPath }).then(() => {
        rewriteFiles('**/*__sketch/**/*.json', jsonTransformer).then(() => {
          console.log(chalk.green(`[💎 ] ${relativePath} is now ready for git!`));
        });
      });
    });
  });
});

const tryParse = contents => {
  try {
    return JSON.parse(contents);
  } catch (err) {
    return null;
  }
}

function getTargetPath(file) {
  const documentName = path.basename(file, '.sketch');
  const sourcePath = path.dirname(file);
  const targetDir = `${documentName}__sketch`;

  return path.join(process.cwd(), sourcePath, targetDir);
}

function jsonTransformer(fileName, contents, callback) {
  // Blank out user-specific settings
  if (/user\.json$/.test(fileName)) {
    return callback(null, '{}');
  }

  const parsedJson = tryParse(contents);

  if (parsedJson === null) {
    return callback(null, contents);
  }

  const prettyJson = JSON.stringify(parsedJson, null, 2);

  // Ensure document is always on first page
  if (/document\.json$/.test(fileName) && prettyJson.currentPageIndex) {
    prettyJson.currentPageIndex = 0;
  }

  callback(null, prettyJson);
}
