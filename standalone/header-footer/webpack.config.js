const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const decorateClientConfig = require('../../webpack').decorateClientConfig;
const babelConfig = require('../../babel.config.js')({ reactHotLoader: false });
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
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: babelConfig,
        include: appPaths
      },
      {
        test: /\.less$/,
        loader: headerCss.extract('style', [
          'css?modules&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
          'less',
          `string-replace?search=CSS_SELECTOR_PREFIX&replace=${cssSelectorPrefix}`
        ].join('!')),
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
    modulesDirectories: ['node_modules', 'components'],
    alias: {
      // Use Preact to dramatically reduce bundle size
      // since consumers don't already have React.
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },

  postcss: [
    autoprefixer
  ],

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
