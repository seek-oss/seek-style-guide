// Alias 'seek-style-guide' so 'seek-style-guide-webpack' works correctly
const path = require('path');
require('module-alias').addAlias('seek-style-guide', path.join(__dirname, '../..'));

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const decorateClientConfig = require('seek-style-guide-webpack').decorateClientConfig;
const babelConfig = require('../../config/babel.config.js')({ reactHotLoader: false });
const cssSelectorPrefix = require('./cssSelectorPrefix');

const headerCss = new ExtractTextPlugin('styles.css');

// Must be absolute paths
const appPaths = [
  __dirname
];

const config = {
  entry: path.resolve(__dirname, 'src/client.js'),

  output: {
    path: path.resolve(__dirname, '../../dist/header-footer'),
    filename: 'client.js',
    library: 'SeekHeaderFooter',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: appPaths,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      },
      {
        test: /\.less$/,
        include: appPaths,
        use: headerCss.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer]
              }
            },
            {
              loader: 'less-loader'
            },
            {
              loader: 'string-replace-loader',
              options: {
                search: '__standalone_css_selector_prefix__',
                replace: cssSelectorPrefix
              }
            }
          ]
        }),
      },
      {
        test: /\.svg$/,
        include: appPaths,
        use: [
          {
            loader: 'raw-loader'
          },
          {
            loader: 'svgo-loader'
          }
        ]
      }
    ]
  },

  resolve: {
    modules: ['node_modules', 'components']
  },

  plugins: [
    headerCss
  ].concat(process.env.NODE_ENV !== 'production' ? [
    new HtmlWebpackPlugin()
  ] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    })
  ]),

  stats: { children: false }
};

module.exports = decorateClientConfig(config, {
  extractTextPlugin: headerCss,
  cssSelectorPrefix: cssSelectorPrefix
});
