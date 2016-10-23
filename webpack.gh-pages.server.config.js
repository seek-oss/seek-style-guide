const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const decorateServerConfig = require('./webpack').decorateServerConfig;
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const templatePath = path.resolve(__dirname, 'index.ejs');
const template = ejs.compile(fs.readFileSync(templatePath, 'utf-8')); // eslint-disable-line no-sync

// Must be absolute paths
const appPaths = [
  path.resolve(__dirname, 'app'),
  path.resolve(__dirname, 'wip_modules')
];

const routes = [
  '/',
  '/icons',
  '/buttons',
  '/textfields',
  '/autosuggest',
  '/textarea',
  '/typography'
];

const config = {
  entry: './app/server-render',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'render.js',
    libraryTarget: 'umd'
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
            'transform-object-rest-spread'
          ]
        },
        include: appPaths
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
    new StaticSiteGeneratorPlugin('render.js', routes, { template }),
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
