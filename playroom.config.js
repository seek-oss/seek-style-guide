// Alias 'seek-style-guide' so 'seek-style-guide-webpack' works correctly
require('module-alias').addAlias('seek-style-guide', __dirname);

const { decorateClientConfig } = require('seek-style-guide-webpack');

module.exports = {
  title: 'SEEK Style Guide',
  components: 'seek-style-guide/react',
  frameComponent:
    'seek-style-guide/react/StyleGuideProvider/StyleGuideProvider.js',
  outputPath: './docs/dist/playroom',
  widths: [320, 740, 1024],
  webpackConfig: () => decorateClientConfig({})
};
