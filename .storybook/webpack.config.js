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
      },
      {
        test: /\.svg$/,
        loaders: [
          'raw',
          'svgo'
        ]
      }
    ]
  },
  postcss: [
    require('postcss-local-scope')
  ],
  resolve: {
    alias: {
      'seek-style-guide': path.resolve(__dirname, '../'),
      'custom-layout': path.resolve('.storybook/ui/layout.js'),
      'custom-controls': path.resolve('.storybook/ui/controls.js')
    },
    modulesDirectories: ['node_modules', 'react', 'wip_modules', '.storybook/components']
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/^\.\/layout$/, 'custom-layout'),
    new webpack.NormalModuleReplacementPlugin(/^\.\/controls$/, 'custom-controls')
  ]
}
