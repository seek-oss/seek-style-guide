# seek-style-guide

This style guide assumes you're using [Less](http://lesscss.org/) for preprocessing CSS. For high level components, it's assumed that your application is built with [React](https://facebook.github.io/react) and compiled using [Webpack](https://webpack.github.io).

In the interest of increased productivity, new projects are strongly encouraged to adhere to this set of technology choices. However, if you'd like to suggest alternatives, feel free join the conversation in the [living-style-guide Slack channel](https://seekchat.slack.com/messages/living-style-guide/).

## Installation

```bash
$ npm install --save-dev SEEK-Jobs/seek-style-guide#<version>
```

## Configuring Webpack

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

## Less

Before any of these building blocks can be used, first import the Less theme by reference.

```less
@import (reference) "~seek-style-guide/theme";
```

### Colour Variables

As much as possible, colours should be directly imported from the style guide. The following colours are provided:

```less
// Brand colours
@sk-blue
@sk-pink
@sk-green

// Partner brand colours
@sk-business
@sk-volunteer
@sk-learning-light
@sk-learning-medium
@sk-learning-dark

// Greys
@sk-black
@sk-charcoal
@sk-mid-grey-dark
@sk-mid-grey-medium
@sk-mid-grey
@sk-mid-grey-light
@sk-grey-light
@sk-grey-lightest
@sk-off-white
@sk-white

// Element colours
@sk-link
@sk-link-visited
@sk-focus
@sk-highlight
@sk-green-light
@sk-footer
@sk-background
@sk-yellow
```

### Accessible Colour Variants

The contrast ratio of certain foreground/background colour combinations don't meet the [AA accessibility standards](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast) that we aim for. As a result, a suite of accessible variants have been provided:

```less
@sk-mid-grey-on-white
@sk-pink-on-grey-light
@sk-learning-dark-on-grey-light
@sk-business-on-grey-light
```

Please note that this list is not exhaustive, so contributions are encouraged. To validate colour combinations, we recommend the use of the web-based tool [Accessible Colors](http://accessible-colors.com) by [@moroshko](https://github.com/moroshko).

### Typographic Mixins

All type should use the standard typographic mixins, e.g.

```less
.element {
  .heroText();
  .headlineText();
  .headingText();
  .subheadingText();
  .standardText();
  .smallText();
  .touchableText();
}
```

Under the hood, these mixins leverage [basekick](https://github.com/mjt01/basekick) to ensure that typography sits correctly on the baseline grid.

### Grid Variables

In order to ensure elements correctly follow the grid, element sizing should always be controlled by the following variables:

```less
@grid-row-height
@grid-gutter-width
@grid-column-width
@grid-container-width
```

When defining a document content container:

```less
.element {
  max-width: @grid-container-width;
}
```

When defining heights and vertical padding/margins:

```less
.element {
  height: (@grid-row-height * 3);
  padding-bottom: @grid-row-height;
  margin-bottom: @grid-row-height;
}
```

When defining widths and horizontal padding/margins:

```less
.element {
  width: (@grid-column-width * 3);
  padding-right: @grid-gutter-width;
  margin-right: @grid-column-width;
}
```

It's important to note that any additions to these values (e.g. borders) will need to be negated to maintain rhythm, e.g.

```less
.element {
  @border-width: 1px;
  border-bottom: @border-width solid @sk-charcoal;
  padding-bottom: @grid-row-height - @border-width;
}
```

## React Components

A growing suite of React components are provided in this style guide. They can be imported like so:

```js
import { HeartIcon, StarIcon } from 'seek-style-guide/react';
```

These components can be viewed online in the following categories:

- [Buttons](http://seek-jobs.github.io/seek-style-guide/buttons)
- [Textfields](http://seek-jobs.github.io/seek-style-guide/textfields)
- [Icons](http://seek-jobs.github.io/seek-style-guide/icons)
