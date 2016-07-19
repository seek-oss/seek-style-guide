const mockCssModules = require('mock-css-modules');

mockCssModules.register(['.less']);

const prunk = require('prunk');

prunk.mock(/\.svg$/, 'mock svg');

const glob = require('glob');
const path = require('path');

const babelrc = {
  presets: ['es2015', 'react'],
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
    'react-hot-loader/babel'
  ]
};

require('babel-register')(babelrc);

glob.sync(path.resolve(__dirname, '../react/**/*.test.js')).forEach(require);
