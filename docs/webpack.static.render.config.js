// Alias 'seek-asia-style-guide' so 'seek-asia-style-guide-webpack' works correctly
const path = require('path');
require('module-alias').addAlias('seek-asia-style-guide', path.join(__dirname, '..'));

const fs = require('fs');
const ejs = require('ejs');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const decorateServerConfig = require('seek-asia-style-guide-webpack').decorateServerConfig;
const babelConfig = require('../config/babel.config.js')({ reactHotLoader: false });
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const templatePath = path.resolve(__dirname, 'index.ejs');
const template = ejs.compile(fs.readFileSync(templatePath, 'utf-8')); // eslint-disable-line no-sync

var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const exposedProperties = ['window', 'navigator', 'document'];
const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(prop => {
  if (typeof global[prop] === 'undefined') {
    exposedProperties.push(prop);
    global[prop] = document.defaultView[prop];
  }
});

// Must be absolute paths
const appPaths = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'wip_modules')
];

const config = {
  entry: path.resolve(__dirname, 'src/server-render'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'render.js',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(?!\.css)\.js$/,
        include: appPaths,
        use: {
          loader: 'import-glob'
        }
      },
      {
        test: /(?!\.css)\.js$/,
        include: appPaths,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      },
      {
        test: /\.css\.js$/,
        include: appPaths,
        use: [
          {
            loader: 'css-loader/locals',
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
            loader: 'css-in-js-loader'
          },
          {
            loader: 'babel-loader',
            options: babelConfig
          }
        ]
      },
      {
        test: /\.less$/,
        include: appPaths,
        use: [
          {
            loader: 'css-loader/locals',
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
          }
        ]
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
    modules: ['node_modules', 'wip_modules', 'components']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BASE_HREF': JSON.stringify(process.env.BASE_HREF)
    }),
    new StaticSiteGeneratorPlugin({
      crawl: true,
      paths: [
        '/',
        // Currently unreachable by crawler:
        '/sketch-exports',
        '/playground'
      ],
      locals: { template }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = decorateServerConfig(config);
