const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const autoprefixerConfig = require('../config/autoprefixer.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const decorateClientConfig = require('../webpack').decorateClientConfig;
const babelConfig = require('../config/babel.config.js')({ reactHotLoader: false });
const failPlugin = require('webpack-fail-plugin');

const appCss = new ExtractTextPlugin('app.css');

// Must be absolute paths
const appPaths = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'wip_modules')
];

const config = {
  entry: path.resolve(__dirname, 'src/client-render'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /(?!\.css)\.js$/,
        loader: 'babel',
        query: babelConfig,
        include: appPaths
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          babelrc: false,
          presets: ['es2015']
        },
        include: /node_modules/
      },
      {
        test: /\.css\.js$/,
        include: appPaths,
        loader: appCss.extract('style', 'css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!css-in-js!babel?' + JSON.stringify(babelConfig))
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
    autoprefixer(autoprefixerConfig)
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
    }),
    failPlugin
  ],

  stats: { children: false }
};

module.exports = decorateClientConfig(config, {
  extractTextPlugin: appCss
});
