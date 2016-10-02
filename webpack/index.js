const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const chalk = require('chalk');
const emoji = require('emoji-dictionary');

const isProduction = () => process.env.NODE_ENV === 'production';

const styleGuidePaths = [
  path.resolve(__dirname, '../react'),
  path.resolve(__dirname, '../theme'),
  path.resolve(__dirname, '../fonts')
];

const resolveAliases = {
  'seek-style-guide': path.resolve(__dirname, '..')
};

const POSTCSS_STYLE_GUIDE_PACK = 'seek-style-guide';
const POSTCSS_DEFAULT_PACK = 'default';

const singleLine = string => string
  .replace(/^ +/gm, ' ')
  .replace(/\n|\r/gm, '')
  .trim();

const warn = message => console.warn(chalk.yellow(
  `\nSEEK STYLE GUIDE WARNING:\n${singleLine(message)}\n`
));

const error = message => {
  throw new Error(
    chalk.red(
      `\nSEEK STYLE GUIDE ERROR:\n${singleLine(message)}\n`
    )
  );
};

const validateConfig = config => {
  config.module.loaders.forEach(loader => {
    if (!loader.include) {
      error(`
        The following loader config is missing an
        "include" value: ${loader.test}. This is required by 'seek-style-guide'
        in order to avoid loader clashes. More info:
        https://webpack.github.io/docs/configuration.html#module-loaders
      `);
    }
  });
};

const decoratePostCss = config => {
  // Setup postcss-loader plugin packs
  // (https://github.com/postcss/postcss-loader#plugins-packs)
  const postcssPlugins = [
    require('autoprefixer')
  ];

  if (config.postcss) {
    // Keep a reference to the consumer's PostCSS plugins
    const defaultPostcssPlugins = typeof config.postcss === 'function' ?
      config.postcss() :
      config.postcss;

    // Name existing config the "default" plugin pack
    config.postcss = () => ({
      [POSTCSS_STYLE_GUIDE_PACK]: postcssPlugins,
      [POSTCSS_DEFAULT_PACK]: defaultPostcssPlugins
    });

    // Ensure the "default" plugin pack is configured for consumer's postcss-loader config
    config.module.loaders = config.module.loaders.map(loaderConfig => {
      if (typeof loaderConfig.loader === 'string') {
        loaderConfig.loader = loaderConfig.loader
          // This is pretty hacky, but will do the trick for now...
          .replace(/(postcss(-loader)?\?)/, `$1pack=${POSTCSS_DEFAULT_PACK}&`) // With query string
          .replace(/(postcss(-loader)?(?!\?))/, `$1?pack=${POSTCSS_DEFAULT_PACK}`); // Without query string
      }

      return loaderConfig;
    });
  } else {
    // The consumer doesn't use postcss-loader, so we can just add our config directly
    config.postcss = () => ({
      [POSTCSS_STYLE_GUIDE_PACK]: postcssPlugins
    });
  }

  return config;
};

const artEmoji = emoji.getUnicode('art');
const getLocalIdentName = () => isProduction() ?
  `${artEmoji}[emoji]` :
  `__STYLE_GUIDE__[name]__[local]___${artEmoji}[emoji]`;

const getCommonLoaders = () => ([
  {
    test: /\.js$/,
    include: styleGuidePaths,
    exclude: /\.raw\.js$/,
    loader: require.resolve('babel-loader'),
    query: {
      babelrc: false,
      presets: ['es2015', 'react'],
      plugins: [
        'transform-class-properties',
        'transform-object-rest-spread'
      ]
    }
  },
  {
    test: /\.raw\.js$/,
    include: styleGuidePaths,
    loaders: [
      require.resolve('raw-loader'),
      require.resolve('uglify-loader')
    ]
  },
  {
    test: /\.svg$/,
    include: styleGuidePaths,
    loaders: [
      require.resolve('raw-loader'),
      require.resolve('svgo-loader')
    ]
  }
]);

const decorateConfig = (config, options) => {
  const loaders = options.loaders || [];
  const plugins = options.plugins || [];
  const externals = options.externals;

  // Ensure config meets minimum requirements for decoration
  config.module = config.module || {};
  config.module.loaders = config.module.loaders || [];
  config.plugins = config.plugins || [];

  validateConfig(config);

  config = decoratePostCss(config);

  // Prepend style guide loaders
  config.module.loaders = getCommonLoaders()
    .concat(loaders)
    .concat(config.module.loaders);

  // Prepend style guide plugins
  config.plugins = plugins
    .concat(config.plugins);

  // Provide externals, if provided
  if (externals) {
    if (config.externals) {
      warn(`
        You've provided "externals" in your Webpack config.
        This means that the style guide cannot provide its
        own externals for you. It's recommended that you
        delete your externals and let the style guide take
        care of it, otherwise you will have to manually keep
        your own externals in sync with the style guide.
      `);
    } else {
      config.externals = externals;
    }
  }

  // Add resolve aliases
  const consumerAliases =
    (config.resolve && config.resolve.alias) ? config.resolve.alias : {};

  for (var alias in resolveAliases) {
    if (consumerAliases[alias] && consumerAliases[alias] !== resolveAliases[alias]) {
      error(`Resolve alias '${alias}' is reserved. Please rename it.\n`);
    } else {
      consumerAliases[alias] = resolveAliases[alias];
    }
  }

  config.resolve = config.resolve || {};
  config.resolve.alias = consumerAliases;

  return config;
};

const decorateServerConfig = config => decorateConfig(config, {
  externals: [
    nodeExternals({
      whitelist: [
        'seek-style-guide/react',
        'seek-style-guide/fonts'
      ]
    })
  ],

  loaders: [
    {
      test: /\.less$/,
      include: styleGuidePaths,
      loaders: [
        `${require.resolve('css-loader/locals')}?modules&localIdentName=${getLocalIdentName()}`,
        `${require.resolve('postcss-loader')}?pack=${POSTCSS_STYLE_GUIDE_PACK}`,
        require.resolve('less-loader')
      ]
    }
  ]
});

const decorateClientConfig = (config, options) => {
  const extractTextPlugin = options && options.extractTextPlugin;

  if (extractTextPlugin === ExtractTextPlugin) {
    error(`
      You appear to be passing in a reference to "ExtractTextPlugin"
      directly, rather than creating an instance via
      "new ExtractTextPlugin(...)". This causes incorrect CSS to be generated
      since the style guide also uses extract-text-webpack-plugin to
      generate its own CSS files for web fonts. As a result, it's
      important that you create your own instance of ExtractTextPlugin and
      pass it in instead. If you're not sure how to do this, you can see
      the Webpack documentation at
      https://github.com/webpack/extract-text-webpack-plugin/tree/webpack-1
    `);
  }

  const decorateStyleLoaders = extractTextPlugin ?
    extractTextPlugin.extract.bind(extractTextPlugin, 'style') :
    loaders => `${require.resolve('style-loader')}!${loaders}`;

  const extractWoff = new ExtractTextPlugin('roboto.woff.css');
  const extractWoff2 = new ExtractTextPlugin('roboto.woff2.css');

  return decorateConfig(config, {
    loaders: [
      {
        test: /\.less$/,
        include: styleGuidePaths,
        loader: decorateStyleLoaders([
          `${require.resolve('css-loader')}?modules&${isProduction() ? 'minimize&' : ''}localIdentName=${getLocalIdentName()}`,
          `${require.resolve('postcss-loader')}?pack=${POSTCSS_STYLE_GUIDE_PACK}`,
          `${require.resolve('less-loader')}`
        ].join('!'))
      },
      {
        test: /Roboto.woff.css$/,
        include: styleGuidePaths,
        loader: extractWoff.extract([
          `${require.resolve('css-loader')}?minimize`
        ])
      },
      {
        test: /Roboto.woff2.css$/,
        include: styleGuidePaths,
        loader: extractWoff2.extract([
          `${require.resolve('css-loader')}?minimize`
        ])
      },
      {
        test: /\.woff2?$/,
        include: styleGuidePaths,
        loaders: [
          require.resolve('base64-font-loader')
        ]
      }
    ],
    plugins: [
      extractWoff,
      extractWoff2
    ]
  });
};

module.exports = {
  decorateServerConfig,
  decorateClientConfig
};
