const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'styleguide2asketch.js'),
  output: {
    path: __dirname,
    filename: '../dist/styleguide2asketch.bundle.js',
    library: 'styleguide2asketch'
  }
};
