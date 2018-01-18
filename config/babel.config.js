module.exports = ({ reactHotLoader = false }) => ({
  babelrc: false,
  presets: [
    'env',
    'react'
  ],
  plugins: [
    'add-react-displayname',
    'transform-class-properties',
    'transform-object-rest-spread'
  ].concat(reactHotLoader ? [
    'react-hot-loader/babel'
  ] : [])
});
