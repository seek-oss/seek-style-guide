# seek-style-guide

Living style guide containing the building blocks and design principles for SEEK web apps.

For now, this style guide is designed for projects using React, Webpack and LESS.

## Installation

```bash
$ npm install --save-dev SEEK-Jobs/seek-style-guide#<version>
```

## Setup

First, decorate your server Webpack config:

```js
const decorateServerConfig = require('seek-style-guide/webpack').decorateServerConfig;

module.exports = decorateServerConfig({
  // Webpack config...
});
```

Then, decorate your client Webpack config:

```js
const decorateClientConfig = require('seek-style-guide/webpack').decorateClientConfig;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  // Webpack config...
};

module.exports = decorateClientConfig(config, {
  // Ensure you pass your ExtractTextPlugin instance to the decorator, if required:
  extractTextPlugin: ExtractTextPlugin
});
```

Please note that, if your Webpack loaders aren't scoped to your local project files via the ["include" option](https://webpack.github.io/docs/configuration.html#module-loaders), the decorator will throw an error.

In the Webpack config for your node targets, ensure `seek-style-guide/react` is marked as an external using [webpack-node-externals](https://github.com/liady/webpack-node-externals):

```js
const nodeExternals = require('webpack-node-externals');
...
module.exports = {
  ...
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['seek-style-guide/react']
    })
  ]
  ...
};
```

## Theme
Contains the design principles that define things like the typographic hierarchy, the grid, the colour paletter etc. These principles are currently only defined as variables and mixins using [LESS](http://lesscss.org/).

### Usage
Here is an example usage when using [LESS](http://lesscss.org/) and [Webpack](https://webpack.github.io/)'s [module resolving](https://webpack.github.io/docs/resolving.html#resolving-a-module-path).

```Less
@import (reference) "~seek-style-guide/theme"
```

## React Components
Contains common components like icons, fields, etc.

#### Usage

```js
import { HeartIcon, StarIcon } from 'seek-style-guide/react';
```

### Available Components
- [BlueButton](./react/buttons/BlueButton)
- [EmailField](./react/fields/EmailField)
- [TextField](./react/fields/TextField)
- [ChevronIcon](./react/icons/ChevronIcon)
- [ClearIcon](./react/icons/ClearIcon)
- [CloseIcon](./react/icons/CloseIcon)
- [ErrorIcon](./react/icons/ErrorIcon)
- [HeartIcon](./react/icons/HeartIcon)
- [HelpIcon](./react/icons/HelpIcon)
- [ProfileIcon](./react/icons/ProfileIcon)
- [SearchIcon](./react/icons/SearchIcon)
- [StarIcon](./react/icons/StarIcon)
- [ThumbsUpIcon](./react/icons/ThumbsUpIcon)
- [TickIcon](./react/icons/TickIcon)
