// Alias 'seek-style-guide' so 'seek-style-guide-webpack' works correctly
const path = require('path');
require('module-alias').addAlias('seek-style-guide', path.join(__dirname, '../..'));

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const autoprefixerConfig = require('../../config/autoprefixer.config');
const { decorateClientConfig, decorateServerConfig } = require('seek-style-guide-webpack');
const babelConfig = require('../../config/babel.config.js')({ reactHotLoader: false });
const cssSelectorPrefix = require('./cssSelectorPrefix');

const headerCss = new ExtractTextPlugin('styles.css');

// Must be absolute paths
const appPaths = [
  __dirname
];

const resolveConfig = {
  modules: ['node_modules', 'components']
};

const getCommonRules = () => ([
  {
    test: /\.js$/,
    include: appPaths,
    use: {
      loader: 'babel-loader',
      options: babelConfig
    }
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
]);

const getStyleLoaders = (options = {}) => {
  return [
    {
      loader: `css-loader${options.server ? '/locals' : ''}`,
      options: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    },
    ...(options.server ? [] : [
      {
        loader: 'postcss-loader',
        options: {
          plugins: [autoprefixer(autoprefixerConfig)]
        }
      }
    ]),
    {
      loader: 'less-loader'
    },
    ...(options.server ? [] : [
      {
        loader: 'string-replace-loader',
        options: {
          search: '__standalone_css_selector_prefix__',
          replace: cssSelectorPrefix
        }
      }
    ])
  ];
};

const clientConfig = {
  entry: path.resolve(__dirname, 'src/client.js'),

  output: {
    path: path.resolve(__dirname, '../../dist/header-footer'),
    filename: 'client.js',
    library: 'SeekHeaderFooter',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      ...getCommonRules(),
      {
        test: /\.less$/,
        include: appPaths,
        use: headerCss.extract({
          fallback: 'style-loader',
          use: getStyleLoaders({ server: false })
        }),
      }
    ]
  },

  resolve: resolveConfig,

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

const renderConfig = {
  entry: path.resolve(__dirname, 'src/render.js'),

  output: {
    path: path.resolve(__dirname, '../../dist/header-footer'),
    filename: 'render.js',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      ...getCommonRules(),
      {
        test: /\.less$/,
        include: appPaths,
        use: getStyleLoaders({ server: true })
      }
    ]
  },

  resolve: resolveConfig,

  plugins: [
    new StaticSiteGeneratorPlugin()
  ]
};

module.exports = [
  decorateClientConfig(clientConfig, {
    extractTextPlugin: headerCss,
    cssSelectorPrefix: cssSelectorPrefix
  }),
  decorateServerConfig(renderConfig)
];
