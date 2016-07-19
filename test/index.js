const glob = require('glob');
const path = require('path');

require('babel-register')({
  presets: ['es2015', 'react'],
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
    'react-hot-loader/babel'
  ]
});

glob.sync('./react/**/*.test.js').forEach(function(file) {
  require(path.resolve(file));
});
