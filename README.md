[![npm](https://img.shields.io/npm/v/seek-style-guide.svg?style=flat-square)](https://www.npmjs.com/package/seek-style-guide)
# seek-style-guide

This style guide assumes you're using [Less](http://lesscss.org/) for preprocessing CSS. For high level components, it's assumed that your application is built with [React](https://facebook.github.io/react) and compiled using [Webpack](https://webpack.github.io).

In the interest of increased productivity, new projects are strongly encouraged to adhere to this set of technology choices. However, if you'd like to suggest alternatives, feel free join the conversation in the [living-style-guide Slack channel](https://seekchat.slack.com/messages/living-style-guide/).

## Installation

```bash
$ npm install --save-dev seek-style-guide
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

const extractCss = new ExtractTextPlugin('style.css');

const config = {
  // Webpack config...
};

module.exports = decorateClientConfig(config, {
  // Ensure you pass your ExtractTextPlugin instance to the decorator, if required:
  extractTextPlugin: extractCss
});
```

Please note that, if your Webpack loaders aren't scoped to your local project files via the ["include" option](https://webpack.github.io/docs/configuration.html#module-loaders), the decorator will throw an error.

## Web Fonts

Our standard web font loading strategy is to load and cache web fonts in the background, and only display them on page load if already present in the cache. This is to ensure that text is rendered as soon as possible, without the dreaded "flash of invisible text" (FOIT), or "flash of unstyled text" (FOUT), both of which are negative performance impacts commonly found with web fonts.

Typically, engineering performant web fonts takes a lot of work, so we've provided a simple mechanism to hook this into your application.

First, include the font bundle by requiring it in the entry point to your client code:

```js
require('seek-style-guide/fonts/bundle');
```

Then, render the font snippet and provide it to your main application template, ensuring it's rendered in the markup before your main CSS file. Note that you need to provide the base href to your static assets:

```js
import { renderFontSnippet } from 'seek-style-guide/fonts';

const fontSnippet = renderFontSnippet({
  baseHref: process.env.SEEK_STATIC_RESOURCE_PATH // (as an example)
});

// Now, pass your generated font snippet to your template.
```

If your application doesn't have a dynamic server component, you can optionally evaluate the snippet immediately:

```js
import { renderFontSnippet } from 'seek-style-guide/fonts';

const fontSnippet = renderFontSnippet({
  baseHref: process.env.SEEK_STATIC_RESOURCE_PATH,  // (as an example)
  evaluate: true
});
```

## Less

Before any of these building blocks can be used, first import the Less theme by reference.

```less
@import (reference) "~seek-style-guide/theme";
```

### Color Variables

As much as possible, colors should be directly imported from the style guide. The following colors are provided:

```less
// Brand colors
@sk-blue
@sk-pink
@sk-green

// Partner brand colors
@sk-business
@sk-volunteer
@sk-learning-light
@sk-learning-medium
@sk-learning-dark

// Grays
@sk-black
@sk-charcoal
@sk-mid-gray-dark
@sk-mid-gray-medium
@sk-mid-gray
@sk-mid-gray-light
@sk-gray-light
@sk-gray-lightest
@sk-off-white
@sk-white

// Element colors
@sk-link
@sk-link-visited
@sk-focus
@sk-highlight
@sk-green-light
@sk-footer
@sk-background
@sk-yellow
```

### Accessible Color Variants

The contrast ratio of certain foreground/background color combinations don't meet the [AA accessibility standards](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast) that we aim for. As a result, a suite of accessible variants have been provided:

```less
@sk-mid-gray-on-white
@sk-pink-on-gray-light
@sk-learning-dark-on-gray-light
@sk-business-on-gray-light
```

Please note that this list is not exhaustive, so contributions are encouraged. To validate color combinations, we recommend the use of the web-based tool [Accessible Colors](http://accessible-colors.com) by [@moroshko](https://github.com/moroshko).

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

### Classic Font Stack

The style guide enforces modern font styling as a default. However, some aspects of the UI may need to fall back to the classic font stack, e.g. the common header used across SEEK. This can be achieved via a simple mixin:

```less
.element {
  .classicFontStack();
}
```

Note that, since font styles cascade, this can be applied to a parent component in order to correctly style all children.

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

## Release Process

This package follows [semantic versioning](http://semver.org). In the `master` branch, run `npm version` with the appropriate version bump:

```bash
$ npm version major
$ npm version minor
$ npm version patch
```

This will automate the process of generating static assets, committing and tagging an updated version number, publishing to npm, pushing to GitHub, and deploying the demo site to GitHub Pages.
