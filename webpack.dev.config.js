const BASE_DIR = process.env.BASE_DIR || 'docs';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const decorateClientConfig = require('./webpack').decorateClientConfig;
const babelConfig = require('./babel.config.js')({ reactHotLoader: true });

// Must be absolute paths
const appPaths = [
  path.resolve(__dirname, BASE_DIR),
  path.resolve(__dirname, 'wip_modules')
];

const config = decorateClientConfig({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    `./${BASE_DIR}/client-render`
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
        query: babelConfig,
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.BASE_HREF': JSON.stringify(process.env.BASE_HREF)
    })
  ]
});

module.exports = config;
