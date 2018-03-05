[![CircleCI](https://circleci.com/gh/seekinternational/seek-asia-style-guide.svg?style=svg)](https://circleci.com/gh/seekinternational/seek-asia-style-guide)

# seek-asia-style-guide

Living style guide for SEEK ASIA, powered by [React](https://facebook.github.io/react), [webpack](https://webpack.js.org), [CSS Modules](https://github.com/css-modules/css-modules) and [Less](http://lesscss.org/).

If you're creating a new project from scratch, consider using [sku](https://github.com/seek-oss/sku), our officially supported front-end development toolkit. It's specially designed to get your project up and running as quickly as possible, while simplifying the process of keeping your development environment up to date.

## Demo site

The easiest way to explore the components offered by the style guide is browsing the [demo site](https://seekinternational.github.io/seek-asia-style-guide/) - use the hamburger menu to access the goodies.

You can also run the demo site locally by checking out this repo and running `npm start`

## Installation

If you want to add SEEK Asia Style Guide to your app, install it with npm or yarn:

```bash
$ npm install --save seek-asia-style-guide
```

If you want to dev on the style guide itself or run the demo page, clone this repository and `npm install` then `npm start` to start the demo page locally.  See [CONTRIBUTING.md](./CONTRIBUTING.md) for a complete guide.

## Upgrading

Consumers can stay up to date by following our [release notes](https://github.com/seekinternational/seek-asia-style-guide/releases), which are published automatically whenever a new release is published to [npm](https://www.npmjs.com/package/seek-asia-style-guide).

## Setup

Wrap your app with the `StyleGuideProvider` component to use any of the style guide components. For example:

```js
import React, { Component } from 'react';
import { StyleGuideProvider } from 'seek-asia-style-guide/react';

export default class App extends Component {
  render() {
    const title = '...';
    const meta = [
      { name: 'description', content: '...' }
    ];
    const link = [
      { rel: 'canonical', href: 'https://www.seekasia.com/' }
    ];

    return (
      <StyleGuideProvider title={title} meta={meta} link={link}>
        ...
      </StyleGuideProvider>
    );
  }
};
```

`StyleGuideProvider`'s props are used to set the page head properties using [Helmet](https://github.com/nfl/react-helmet).

## High Level Components

As much as possible, you should aim to minimise the amount of custom CSS you need to write. This is achieved by leveraging our suite of high level components, which are demonstrated on our [style guide documentation site](https://seekinternational.github.io/seek-asia-style-guide/).

## Headers

Please use the branded headers under `JobStreet` and `JobsDB` for candidate-facing sites.  They consume the same underlying header component but you may find it useful to avoid importing the assets of the second brand in a particular build if your users will only see one of them at runtime.

If you're building a variant branded experience, you should consume the underlying `<Header />` component in `/react`.  Note it has a fairly extensive API, see the `JobStreet` and `JobsDB` components for examples of how to pass props in to the `<Header />` component.

## Low Level Styling

For more advanced pages, if you need to drop down into Less, the style guide provides a set of mixins and variables to make it easier to stay on brand.

In any style sheet that depends on the style guide, first import the Less theme by reference.

```less
@import (reference) "~seek-asia-style-guide/theme";
```

### Responsive Breakpoint

The style guide exposes one responsive breakpoint:

```less
@responsive-breakpoint: 740px;
```

Content should otherwise be responsive within its container. The set of included components follow this model internally if you'd like to get a sense of what this looks like in practice.

### Z-Indexes

To ensure correct relative elements stacking order, z-index variables are provided:

```less
@z-index-header-overlay
@z-index-header
@z-index-page-overlay
@z-index-inline-overlay
@z-index-negative
```

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
  height: (@grid-base * 6);
  padding-bottom: @grid-base;
  margin-bottom: @grid-base * 2;
}
```

It's important to note that any additions to these values (e.g. borders) will need to be negated to maintain rhythm:

```less
.element {
  @border-width: 1px;
  border-bottom: @border-width solid @sk-charcoal;
  padding-bottom: @grid-base * 2 - @border-width;
}
```

## Advanced Usage

### Optimising Imports

When importing from the style guide, while it might appear that you are only importing what's needed, it's highly likely that you're actually including the entire style guide in your application bundle ([even when using tree shaking in webpack 2](https://github.com/webpack/webpack/issues/2867)).

In order to help you optimise your bundle size, all components can be imported directly from their individual source files. For example, take a look at standard import statement:

```js
import { Section, Card } from 'seek-asia-style-guide/react';
```

This can also be expressed as separate, file-level imports:

```js
import Section from 'seek-asia-style-guide/react/Section/Section.js';
import Card from 'seek-asia-style-guide/react/Card/Card.js';
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
    "seek-asia-style-guide/react": {
      "transform": "seek-asia-style-guide/react/${member}/${member}",
      "preventFullImport": true
    }
  }]
]
```

## Sketch asset generation

On every successful build (via `npm test`), `asketch.json` files (i.e. *almost* Sketch files) are generated by [html-sketchapp](https://github.com/brainly/html-sketchapp) containing document styles and symbols. These are provided via the following JSON files:

- `dist/asketch/document.asketch.json`
- `dist/asketch/page.asketch.json`

These can be manually imported into Sketch by [downloading html-sketchapp](https://github.com/brainly/html-sketchapp/archive/master.zip) and installing `asketch2sketch.sketchplugin`.

Once in Sketch, open the "Plugins" menu and select "From \*Almost\* Sketch to Sketch". Assuming you've run a full build of the style guide via `npm test`, you should now be able to select the `asketch.json` files in `dist/asketch`.

## SEEK Style Guide

This is a fork of [seek-style-guide](https://github.com/seek-oss/seek-style-guide), and we are still taking upstream merges to take advantage of the rapid pace of that project.  This gives us an elevated starting point, at the cost of quite a lot of SEEK ANZ specific branding styles remaining in the repo.

## WIP

`seek-asia-style-guide` is rapidly accumulating SEEK Asia, JobsDB and JobStreet branding but does not yet offer a simple and canonical way to consume them (and avoid any SEEK ANZ remainders).  This is a high priority to improve the accessibility of the repo for consuming apps.

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md)

If you're planning to change the public API, please [open a new issue](https://github.com/seekinternational/seek-asia-style-guide/issues/new) and follow the provided RFC template in the [GitHub issue template](.github/ISSUE_TEMPLATE.md).

## License

MIT.
