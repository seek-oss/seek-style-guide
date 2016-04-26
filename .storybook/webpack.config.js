const webpack = require('webpack');
const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.less$/,
        loaders: [
          'style',
          'css?localIdentName=[name]__[local]___[hash:base64:7]',
          'postcss',
          'less'
        ]
      }
    ]
  },
  postcss: [
    require('postcss-local-scope')
  ],
  resolve: {
    alias: {
      'custom-layout': path.resolve('.storybook/ui/layout.js'),
      'custom-controls': path.resolve('.storybook/ui/controls.js'),
      'theme.less': path.resolve('theme.less')
    },
    modulesDirectories: ['node_modules', 'react']
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/^\.\/layout$/, 'custom-layout'),
    new webpack.NormalModuleReplacementPlugin(/^\.\/controls$/, 'custom-controls')
  ]
}
