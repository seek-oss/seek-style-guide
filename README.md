# seek-style-guide

Living style guide containing the building blocks and design principles for SEEK web apps.

## Project Requirements

This style guide has been extracted from [chalice](https://github.com/SEEK-Jobs/chalice), and depends on the following packages:

 - [React](https://github.com/facebook/react)
 - [Webpack](https://webpack.github.io/)
 - [babel-loader](https://github.com/babel/babel-loader)
 - [css-loader (v0.23)](https://github.com/webpack/css-loader)
 - [less-loader](https://github.com/webpack/less-loader)
 - [postcss-loader](https://github.com/postcss/postcss-loader)
 - [postcss-local-scope](https://github.com/css-modules/postcss-modules-local-by-default)
 - [svgo-loader](https://github.com/rpominov/svgo-loader)
 - [raw-loader](https://github.com/webpack/raw-loader)

## Installation

```bash
$ npm install --save-dev seek-jobs/seek-style-guide#<version>
```

In your Webpack loader config, ensure you aren't excluding the style guide from your `.js` loader config:

```js
loaders: [
  ...
  { test: /\.js$/, loader: 'babel', exclude: /node_modules\/(?!seek-style-guide)/ }
]
```

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
