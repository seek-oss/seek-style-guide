// This will apply the magic of converting:
//   styles.something
// to:
//   'something'
const mockCssModules = require('mock-css-modules');
mockCssModules.register(['.less']);

// This will make sure that mocha won't fail when it encounters:
//   import something from './something.svg'
const prunk = require('prunk');
prunk.mock(/\.svg$/, 'mock svg');

// When running mocha we need to make sure to educate it to run babel.
// We don't want to introduce a .babelrc file. This is to make sure that
// the Style Guide is not depedent on it.
const babelrc = {
  presets: ['es2015', 'react'],
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
    'react-hot-loader/babel'
  ]
};
require('babel-register')(babelrc);

// require all test files
const glob = require('glob');
const path = require('path');
glob.sync(path.resolve(__dirname, '../react/**/*.test.js')).forEach(require);
