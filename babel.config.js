module.exports = ({ reactHotLoader = false }) => ({
  presets: [
    'es2015',
    'react'
  ],
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread'
  ].concat(reactHotLoader ? [
    'react-hot-loader/babel'
  ] : [])
});
