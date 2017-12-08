const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'convertToAlmostSketch.js'),
  output: {
    path: __dirname,
    filename: '../dist/convertToAlmostSketch.bundle.js',
    library: 'convertToAlmostSketch'
  }
};
