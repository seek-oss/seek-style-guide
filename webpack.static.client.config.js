const BASE_DIR = process.env.BASE_DIR || 'docs';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const decorateClientConfig = require('./webpack').decorateClientConfig;
const babelConfig = require('./babel.config.js')({ reactHotLoader: false });

const appCss = new ExtractTextPlugin('app.css');

// Must be absolute paths
const appPaths = [
  path.resolve(__dirname, BASE_DIR),
  path.resolve(__dirname, 'wip_modules')
];

const config = {
  entry: `./${BASE_DIR}/client-render`,

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
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
        loader: appCss.extract('style', 'css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less'),
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    appCss,
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    })
  ],

  stats: { children: false }
};

module.exports = decorateClientConfig(config, {
  extractTextPlugin: appCss
});
