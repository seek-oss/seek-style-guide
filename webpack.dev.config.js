const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const decorateClientConfig = require('./webpack').decorateClientConfig;

// Must be absolute paths
const appPaths = [
  path.resolve(__dirname, 'app'),
  path.resolve(__dirname, 'wip_modules')
];

const config = decorateClientConfig({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/client-render'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'), // Must be an absolute path
    filename: 'index.js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
            'react-hot-loader/babel'
          ]
        },
        include: appPaths
      },
      {
        test: /\.less$/,
        loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less',
        include: appPaths
      },
      {
        test: /\.svg$/,
        loader: 'raw!svgo',
        include: appPaths
      }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'wip_modules', 'components']
  },

  postcss: [
    autoprefixer
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;
