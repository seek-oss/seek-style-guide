const chalk = require('chalk');

module.exports = function failWebpackBuildOnError() {
  let isWatch = true;

  this.plugin('run', function(compiler, callback) {
    isWatch = false;
    callback.call(compiler);
  });

  this.plugin('done', function(stats) {
    if (stats.compilation.errors && stats.compilation.errors.length) {
      console.error(chalk.red(stats.compilation.errors));
      if (!isWatch) {
        process.exit(1);
      }
    }
  });
};
