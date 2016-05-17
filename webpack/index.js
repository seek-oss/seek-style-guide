const path = require('path');

const isProduction = () => process.env.NODE_ENV === 'production';

const styleGuidePaths = [
  path.resolve(__dirname, '../react'),
  path.resolve(__dirname, '../theme')
];

const resolveAliases = {
  'seek-style-guide': path.resolve(__dirname, '..')
};

const POSTCSS_STYLE_GUIDE_PACK = 'seek-style-guide';
const POSTCSS_DEFAULT_PACK = 'default';

const singleLine = string => string
  .replace(/^ +/gm, ' ')
  .replace(/\n|\r/gm, '');

const validateConfig = config => {
  config.module.loaders.forEach(loader => {
    if (!loader.include) {
      throw new Error(singleLine(`The following loader config is missing an
        "include" value: ${loader.test}. This is required by 'seek-style-guide'
        in order to avoid loader clashes. More info:
        https://webpack.github.io/docs/configuration.html#module-loaders`));
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
      loaderConfig.loader = loaderConfig.loader
        // This is pretty hacky, but will do the trick for now...
        .replace(/(postcss(-loader)?\?)/, `$1pack=${POSTCSS_DEFAULT_PACK}&`) // With query string
        .replace(/(postcss(-loader)?(?!\?))/, `$1?pack=${POSTCSS_DEFAULT_PACK}`); // Without query string

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

const getLocalIdentName = () => isProduction() ?
  '[hash:base64:7]' :
  '__STYLE_GUIDE__[name]__[local]___[hash:base64:7]';

const getCommonLoaders = () => ([
  {
    test: /\.js$/,
    include: styleGuidePaths,
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
    test: /\.svg$/,
    include: styleGuidePaths,
    loaders: [
      require.resolve('raw-loader'),
      require.resolve('svgo-loader')
    ]
  }
]);

const decorateConfig = (config, loaders) => {
  validateConfig(config);

  config = decoratePostCss(config);

  // Prepend style guide loaders
  config.module.loaders = getCommonLoaders()
    .concat(loaders)
    .concat(config.module.loaders);

  // Add resolve aliases
  const consumerAliases =
    (config.resolve && config.resolve.alias) ? config.resolve.alias : {};

  for (var alias in resolveAliases) {
    if (consumerAliases[alias] && consumerAliases[alias] !== resolveAliases[alias]) {
      throw new Error(`Resolve alias '${alias}' is reserved. Please rename it.\n`)
    } else {
      consumerAliases[alias] = resolveAliases[alias];
    }
  }

  config.resolve = config.resolve || {};
  config.resolve.alias = consumerAliases;

  return config;
};

const decorateServerConfig = config => decorateConfig(config, [
  {
    test: /\.less$/,
    include: styleGuidePaths,
    loaders: [
      `${require.resolve('css-loader/locals')}?modules&localIdentName=${getLocalIdentName()}`,
      `${require.resolve('postcss-loader')}?pack=${POSTCSS_STYLE_GUIDE_PACK}`,
      require.resolve('less-loader')
    ]
  }
]);

const decorateClientConfig = (config, options) => {
  const extractTextPlugin = options && options.extractTextPlugin;
  const decorateStyleLoaders = extractTextPlugin ?
    extractTextPlugin.extract.bind(null, 'style') :
    loaders => `${require.resolve('style-loader')}!${loaders}`;

  return decorateConfig(config, [
    {
      test: /\.less$/,
      include: styleGuidePaths,
      loader: decorateStyleLoaders([
        `${require.resolve('css-loader')}?modules&${isProduction() ? 'minimize&' : ''}localIdentName=${getLocalIdentName()}`,
        `${require.resolve('postcss-loader')}?pack=${POSTCSS_STYLE_GUIDE_PACK}`,
        `${require.resolve('less-loader')}`
      ].join('!'))
    }
  ]);
};

module.exports = {
  decorateServerConfig,
  decorateClientConfig
};
