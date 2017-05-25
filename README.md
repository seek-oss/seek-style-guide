[![Build Status](https://img.shields.io/travis/seek-oss/seek-style-guide/master.svg?style=flat-square)](http://travis-ci.org/seek-oss/seek-style-guide) [![npm](https://img.shields.io/npm/v/seek-style-guide.svg?style=flat-square)](https://www.npmjs.com/package/seek-style-guide) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

# seek-style-guide

This style guide assumes you're using [Less](http://lesscss.org/) for preprocessing CSS. For high level components, it's assumed that your application is built with [React](https://facebook.github.io/react) and compiled using [Webpack](https://webpack.github.io).

## Installation

```bash
$ npm install --save-dev seek-style-guide
```

## Setup

### New Projects

If you're creating a new project from scratch, consider using [sku](https://github.com/seek-oss/sku), our officially supported front-end development toolkit. It's specially designed to get your project up and running as fast as possible, while simplifying the process of keeping your development environment up to date.

### Existing Webpack Projects

#### Webpack v2+

[seek-style-guide-webpack](https://github.com/seek-oss/seek-style-guide-webpack)

#### Webpack v1

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

#### Alternative Bundlers

While webpack has first class support, this style guide will work with any bundler that can be configured to support the following:

- Overloading of import statements to allow dependencies between different asset types.
- JavaScript compilation with support for ES2015, JSX, class properties and object rest/spread.
- Compilation of Less and CSS Modules, with the ability to generate static CSS files.
- Handling of web fonts, with the ability to base64 encode them into CSS.
- Importing raw file contents from SVGs.

If you've successully created another bundler integration along the lines of [seek-style-guide-webpack](https://github.com/seek-oss/seek-style-guide-webpack), please open a pull request!

### Optimising Imports

When importing from the style guide, while it might appear that you are only importing what's needed, it's highly likely that you're actually including the entire style guide in your application bundle ([even when using tree shaking in webpack 2](https://github.com/webpack/webpack/issues/2867)).

In order to help you optimise your bundle size, all components can be imported directly from their individual source files. For example, take a look at standard import statement:

```js
import { Header, Footer } from 'seek-style-guide/react';
```

This can also be expressed as separate, file-level imports:

```js
import Header from 'seek-style-guide/react/Header/Header.js';
import Footer from 'seek-style-guide/react/Footer/Footer.js';
```

Rather than transforming this manually, it's recommended that you leverage [Babel](https://babeljs.io/) instead, with [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) configured to match the pattern used in this style guide.

To set this up, assuming you're already using Babel, first install the plugin:

```bash
npm install --save-dev babel-plugin-transform-imports
```

Then, include the following in your Babel config:

```js
"plugins": [
  ["babel-plugin-transform-imports", {
    "seek-style-guide/react": {
      "transform": "seek-style-guide/react/${member}/${member}",
      "preventFullImport": true
    }
  }]
]
```

### Setting Up the Style Guide Provider

Wrap your app with the `StyleGuideProvider` component to use any of the style guide components. For example:

```js
render() {
  const locale = 'AU';
  const title = '...';
  const meta = [
    { name: 'description', content: '...' }
  ];
  const link = [
    { rel: 'canonical', href: 'https://www.seek.com.au/' }
  ];

  return (
    <StyleGuideProvider locale={locale} title={title} meta={meta} link={link}>
      ...
    </StyleGuideProvider>
  );
}
```

`StyleGuideProvider`'s props are used to set the page head properties using [Helmet](https://github.com/nfl/react-helmet).

### Applying the Standard Header and Footer

The standard header and footer are provided as React components:

```js
import { Header, Footer } from 'seek-style-guide/react';
```

The `<Header>` component accepts the following props:

- **locale:** `'AU'` (default) or `'NZ'`
- **authenticated:** `null/undefined` (default, authentication pending), `true` or `false`
- **userName:** User's display name, when authenticated
- **activeTab:** Text of the active tab, e.g. `'Job Search'`
- **divider:** `true` (default, renders a blue divider below the navigation tabs) or `false`
- **linkRenderer:** Function to allow custom rendering of links. The default implementation simply renders a standard link, spreading all props: `props => <a {...props} />`

The `<Footer>` component accepts the following props:
- **locale:** See above.
- **linkRenderer:** See above.

### Setting up Web Fonts

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

In any style sheet that depends on the style guide, first import the Less theme by reference.

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
@sk-purple

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
@sk-yellow
@sk-yellow-light
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


### Responsive Breakpoint and Type

The style guide exposes one responsive breakpoint:

```less
@responsive-breakpoint: 740px;
```

Our components use this internally, and can be expected to change presentation past this breakpoint if there is an advantage in doing so (for example the `Columns` component only presents as columns past this breakpoint).

We also expose responsive type mixins that may change scale and row span based on this breakpoint:

```less
.element {
  .heroTextResponsive();
  .headlineTextResponsive();
  .headingTextResponsive();
  .subheadingTextResponsive();
  .standardTextResponsive();
  .smallTextResponsive();
}
```

In particular standard text is larger on a smaller screen using `.standardTextResponsive`


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

- [Buttons](http://seek-oss.github.io/seek-style-guide/buttons)
- [Textfields](http://seek-oss.github.io/seek-style-guide/textfields)
- [Textarea](http://seek-oss.github.io/seek-style-guide/textarea)
- [Icons](http://seek-oss.github.io/seek-style-guide/icons)
- [Autosuggest](http://seek-oss.github.io/seek-style-guide/autosuggest)
- [Monthpicker](http://seek-oss.github.io/seek-style-guide/monthpicker)
- [Checkbox](http://seek-oss.github.io/seek-style-guide/checkbox)
- [Dropdown](http://seek-oss.github.io/seek-style-guide/dropdown)
- [SlideToggle](http://seek-oss.github.io/seek-style-guide/slide-toggle)

## Standalone Header and Footer

If you're maintaining or updating a non-React app, a standalone JS + CSS package is provided when [installing from npm](#installation). The bundled JavaScript is provided as a [UMD package](https://github.com/umdjs/umd), providing a global `SeekHeaderFooter` object as a fallback for older apps without a proper module system.

First, include the following files in your app:
- `seek-style-guide/dist/header-footer/styles.css`
- `seek-style-guide/dist/header-footer/client.js`

Then, add placeholder elements to your page:
- `<div id="header"></div>`
- `<div id="footer"></div>`

When the document is ready, render the header:

```js
var header = SeekHeaderFooter.renderHeader(document.getElementById('header'), {
  ...initialProps
});

// Update props later, if needed:
header.updateProps({
  ...newProps
});
```

Finally, render the footer following a similar pattern:

```js
var footer = SeekHeaderFooter.renderFooter(document.getElementById('footer'), {
  ...initialProps
});

// Update props later, if needed:
footer.updateProps({
  ...newProps
});
```

If you need to create React elements (e.g. when providing a `linkRenderer` function), the standalone bundle also exports React's [createElement](https://facebook.github.io/react/docs/react-api.html#createelement) function so you don't need to install React separately to gain access to it:

```js
var link = SeekHeaderFooter.createElement('a', { href: '/jobs' }, 'Jobs');
```

For more detail on accepted props, read the React documentation for [applying the standard header and footer](#applying-the-standard-header-and-footer).

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT.
