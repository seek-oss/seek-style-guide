const promisify = require('es6-promisify');
const glob = promisify(require('glob'));
const zipFolder = promisify(require('zip-folder'));
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

glob('**/*__sketch/').then(sketchDirs => {
  const relativePaths = sketchDirs.map(sketchDir => {
    const targetFilePath = getTargetFilePath(sketchDir);
    const relativeFilePath = path.relative(process.cwd(), targetFilePath);

    zipFolder(sketchDir, targetFilePath).then(() => {
      console.log(chalk.green(`[💎 ] ${relativeFilePath} is now ready for Sketch!`));
    });

    return relativeFilePath;
  });

  const sketchManifestJson = JSON.stringify({
    files: relativePaths
  }, null, 2);

  const sketchManifestPath = path.join(process.cwd(), 'sketch-manifest.json');
  fs.writeFileSync(sketchManifestPath, sketchManifestJson);
  console.log(chalk.green(`[📄 ] Wrote Sketch file manifest!`));
});

function getTargetFilePath(dir) {
  const dirname = path.basename(dir);
  const parentDir = path.resolve(process.cwd(), dir, '../');
  const targetFile = `${dirname.replace('__sketch', '')}.sketch`;

  return path.join(parentDir, targetFile);
}
