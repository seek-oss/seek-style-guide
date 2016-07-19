require('babel-register')({
  presets: ['es2015', 'react'],
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
    'react-hot-loader/babel'
  ]
});

require('../react/fields/TextField/TextField.test');
