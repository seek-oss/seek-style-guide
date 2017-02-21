const babelJest = require('babel-jest');
const babelConfig = require('../babel.config.js')({ reactHotLoader: false });

module.exports = babelJest.createTransformer(babelConfig);
