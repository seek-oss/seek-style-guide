module.exports = ({ reactHotLoader = false }) => ({
  babelrc: false,
  presets: [
    'env',
    'react'
  ],
  plugins: [
    'syntax-dynamic-import',
    'add-react-displayname',
    'transform-class-properties',
    'transform-object-rest-spread'
  ].concat(reactHotLoader ? [
    'react-hot-loader/babel'
  ] : [])
});
