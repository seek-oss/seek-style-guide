const promisify = require('es6-promisify');
const glob = promisify(require('glob'));
const zipFolder = promisify(require('zip-folder'));
const chalk = require('chalk');
const path = require('path');

glob('**/*__sketch/').then(sketchDirs => {
  sketchDirs.forEach(sketchDir => {
    const targetFilePath = getTargetFilePath(sketchDir);

    zipFolder(sketchDir, targetFilePath).then(() => {
      console.log(chalk.green(`[💎 ] ${path.basename(targetFilePath)} is now ready for Sketch!`));
    });
  })
});

function getTargetFilePath(dir) {
  const dirname = path.basename(dir);
  const parentDir = path.resolve(process.cwd(), dir, '../');
  const targetFile = `${dirname.replace('__sketch', '')}.sketch`;

  return path.join(parentDir, targetFile);
}
