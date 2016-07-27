// Create jsdom required to test user behaviours.
// Required by `TestUtils.renderIntoDocument`
const jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

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
