const babelJest = require('babel-jest');
const babelConfig = require('../config/babel.config.js')({
  reactHotLoader: false
});

module.exports = babelJest.createTransformer(babelConfig);
