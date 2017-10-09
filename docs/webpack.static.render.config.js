const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const decorateServerConfig = require('../webpack').decorateServerConfig;
const babelConfig = require('../config/babel.config.js')({ reactHotLoader: false });
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const failPlugin = require('webpack-fail-plugin');

const templatePath = path.resolve(__dirname, 'index.ejs');
const template = ejs.compile(fs.readFileSync(templatePath, 'utf-8')); // eslint-disable-line no-sync

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
    loaders: [
      {
        test: /(?!\.css)\.js$/,
        loader: 'babel',
        query: babelConfig,
        include: appPaths
      },
      {
        test: /\.css\.js$/,
        include: appPaths,
        loader: 'css/locals?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!css-in-js!babel?' + JSON.stringify(babelConfig)
      },
      {
        test: /\.less$/,
        loader: 'css/locals?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less',
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
        NODE_ENV: JSON.stringify('production'),
        BASE_HREF: JSON.stringify(process.env.BASE_HREF)
      }
    }),
    new StaticSiteGeneratorPlugin({
      crawl: true,
      paths: [
        '/',
        '/playground' // Currently unreachable by crawler
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
    }),
    failPlugin
  ]
};

module.exports = decorateServerConfig(config);
