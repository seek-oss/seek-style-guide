seek-style-guide
================

Living style guide containing the building blocks and design principles for SEEK web apps.

## Getting Started

### Requirements

This style guide has been extracted from Houston, so depends on the following packages:

 - React
 - Webpack
 - babel-loader
 - css-loader (v0.23)
 - less-loader
 - postcss-loader
 - postcss-local-scope
 - svgo-loader
 - raw-loader

### Installation

```bash
$ npm install --save-dev seek-style-guide#version
```

In your Webpack loader config, ensure you aren't excluding the style guide from your `.js` loader config:

```js
loaders: [
  ...
  { test: /\.js$/, loader: 'babel', exclude: /node_modules\/(?!seek-style-guide)/ }
]
```

In the Webpack config for your node targets, ensure `seek-style-guide` is marked as an external using [webpack-node-externals](https://github.com/liady/webpack-node-externals):

```js
const nodeExternals = require('webpack-node-externals');
...
module.exports = {
  ...
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['seek-style-guide']
    })
  ]
  ...
};
```

## Theme
Contains the design principles that define things like the typographic hierarchy, the grid, the colour paletter etc. These principles are currently only defined as variables and mixins using [LESS](http://lesscss.org/).

#### Usage
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

#### Available Components
- [BlueButton](./buttons/BlueButton)
- [EmailField](./fields/EmailField)
- [TextField](./fields/TextField)
- [ChevronIcon](./icons/ChevronIcon)
- [ClearIcon](./icons/ClearIcon)
- [CloseIcon](./icons/CloseIcon)
- [ErrorIcon](./icons/ErrorIcon)
- [HeartIcon](./icons/HeartIcon)
- [HelpIcon](./icons/HelpIcon)
- [ProfileIcon](./icons/ProfileIcon)
- [SearchIcon](./icons/SearchIcon)
- [StarIcon](./icons/StarIcon)
- [ThumbsUpIcon](./icons/ThumbsUpIcon)
- [TickIcon](./icons/TickIcon)
