[![Build Status](https://img.shields.io/travis/seek-oss/seek-style-guide/master.svg?style=flat-square)](http://travis-ci.org/seek-oss/seek-style-guide) [![npm](https://img.shields.io/npm/v/seek-style-guide.svg?style=flat-square)](https://www.npmjs.com/package/seek-style-guide) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

# seek-style-guide

Living style guide for SEEK, powered by [React](https://facebook.github.io/react), [Less](http://lesscss.org/) and [CSS Modules](https://github.com/css-modules/css-modules).

If you're creating a new project from scratch, consider using [sku](https://github.com/seek-oss/sku), our officially supported front-end development toolkit. It's specially designed to get your project up and running as quickly as possible, while simplifying the process of keeping your development environment up to date.

If you'd instead like to work on a custom [webpack](https://webpack.js.org) project, you can use [seek-style-guide-webpack](https://github.com/seek-oss/seek-style-guide-webpack) to streamline the integration process.

## Installation

```bash
$ npm install --save-dev seek-style-guide
```

## Setup

Wrap your app with the `StyleGuideProvider` component to use any of the style guide components. For example:

```js
import React, { Component } from 'react';

export default class App extends Component {
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
};
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

## High Level Components

As much as possible, you should aim to minimise the amount of custom CSS you need to write. This is achieved by leveraging our suite of high level components, which are demonstrated on our [style guide documentation site](https://seek-oss.github.io/seek-style-guide/).

## Low Level Styling

For more advanced pages, if you need to drop down into Less, the style guide provides a set of mixins and variables to make it easier to stay on brand.

In any style sheet that depends on the style guide, first import the Less theme by reference.

```less
@import (reference) "~seek-style-guide/theme";
```

### Responsive Breakpoint

The style guide exposes one responsive breakpoint:

```less
@responsive-breakpoint: 740px;
```

Content should otherwise be responsive within its container. The set of included components follow this model internally if you'd like to get a sense of what this looks like in practice.

### Color Variables

As much as possible, colors should be directly imported from the style guide.

The following colors are provided:

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

### Z-Indexes

To ensure correct relative elements stacking order, z-index variables are provided:

```less
@z-index-header-overlay
@z-index-header
@z-index-page-overlay
@z-index-inline-overlay
@z-index-negative
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

It's important to note that any additions to these values (e.g. borders) will need to be negated to maintain rhythm:

```less
.element {
  @border-width: 1px;
  border-bottom: @border-width solid @sk-charcoal;
  padding-bottom: @grid-row-height - @border-width;
}
```

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

## Advanced Usage

### Optimising Imports

**Note: If you're using [sku](https://github.com/seek-oss/sku), this optimisation is already enabled.**

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

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT.
