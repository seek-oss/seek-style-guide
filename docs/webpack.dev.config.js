// Alias 'seek-style-guide' so 'seek-style-guide-webpack' works correctly
const path = require('path');
require('module-alias').addAlias('seek-style-guide', path.join(__dirname, '..'));

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const autoprefixerConfig = require('../config/autoprefixer.config');
const decorateClientConfig = require('seek-style-guide-webpack').decorateClientConfig;
const babelConfig = require('../config/babel.config.js')({ reactHotLoader: true });

// Must be absolute paths
const appPaths = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'wip_modules')
];

const config = decorateClientConfig({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/client-render')
  ],

  output: {
    path: path.resolve(__dirname, 'dist'), // Must be an absolute path
    filename: 'index.js',
    publicPath: '/dist/'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: appPaths,
        use: {
          loader: 'import-glob'
        }
      },
      {
        test: /\.js$/,
        include: appPaths,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      },
      {
        test: /\.js$/,
        include: /node_modules/,
        exclude: /canvg-fixed/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env']
          }
        }
      },
      {
        test: /\.less$/,
        include: appPaths,
        use: [
          {
            loader: 'style-loader'
          },
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
              plugins: [autoprefixer(autoprefixerConfig)]
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.BASE_HREF': JSON.stringify(process.env.BASE_HREF)
    })
  ]
});

module.exports = config;
