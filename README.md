[![Build Status](https://img.shields.io/travis/seek-oss/seek-style-guide/master.svg?style=flat-square)](http://travis-ci.org/seek-oss/seek-style-guide) [![npm](https://img.shields.io/npm/v/seek-style-guide.svg?style=flat-square)](https://www.npmjs.com/package/seek-style-guide) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/) [![Styled with Prettier](https://img.shields.io/badge/styled%20with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# seek-style-guide

Living style guide for [SEEK](https://github.com/seek-oss), powered by [React](https://facebook.github.io/react), [webpack](https://webpack.js.org), [CSS Modules](https://github.com/css-modules/css-modules) and [Less](http://lesscss.org/).

If you're creating a new project from scratch, consider using [sku](https://github.com/seek-oss/sku), our officially supported front-end development toolkit. It's specially designed to get your project up and running as quickly as possible, while simplifying the process of keeping your development environment up to date.

If you'd instead like to work on a custom webpack project, you can use [seek-style-guide-webpack](https://github.com/seek-oss/seek-style-guide-webpack) to streamline the integration process.

## Installation

```bash
$ npm install --save seek-style-guide react react-dom react-helmet
```

Optionally, if not making use of the React components, you can install seek-style-guide by itself:

```bash
$ npm install --save seek-style-guide
```

## Upgrading

Consumers can stay up to date by following our [release notes](https://github.com/seek-oss/seek-style-guide/releases), which are published automatically whenever a new release is published to [npm](https://www.npmjs.com/package/seek-style-guide).

## Setup

Wrap your app with the `StyleGuideProvider` component to use any of the style guide components. For example:

```js
import React, { Component } from 'react';
import { StyleGuideProvider } from 'seek-style-guide/react';

export default class App extends Component {
  render() {
    const locale = 'AU';
    const title = '...';
    const meta = [{ name: 'description', content: '...' }];
    const link = [{ rel: 'canonical', href: 'https://www.seek.com.au/' }];

    return (
      <StyleGuideProvider locale={locale} title={title} meta={meta} link={link}>
        ...
      </StyleGuideProvider>
    );
  }
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

## High Level Components

As much as possible, you should aim to minimise the amount of custom CSS you need to write. This is achieved by leveraging our suite of high level components, which are demonstrated on our [style guide documentation site](https://seek-oss.github.io/seek-style-guide/).

## Low Level Styling

For more advanced pages, if you need to drop down into Less, the style guide provides a set of mixins and variables to make it easier to stay on brand.

In any style sheet that depends on the style guide, first import the Less theme by reference.

```less
@import (reference) '~seek-style-guide/theme';
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
@sk-blue-darker;
@sk-blue-dark;
@sk-blue;
@sk-blue-light;
@sk-blue-lighter;
@sk-pink;
@sk-green;
@sk-green-light;
@sk-purple;
@sk-teal;
@sk-orange;
@sk-yellow;
@sk-yellow-light;

// Partner brand colors
@sk-business;
@sk-volunteer;
@sk-learning-light;
@sk-learning-medium;
@sk-learning-dark;

// Grays
@sk-black;
@sk-charcoal;
@sk-mid-gray-dark;
@sk-mid-gray-medium;
@sk-mid-gray;
@sk-mid-gray-light;
@sk-gray-light;
@sk-gray-lightest;
@sk-off-white;
@sk-white;

// Element colors
@sk-link;
@sk-link-visited;
@sk-focus;
@sk-footer;
@sk-background;
@sk-form-accent;
@sk-positive-light;
@sk-positive;
@sk-info-light;
@sk-info;
@sk-critical-light;
@sk-critical;
@sk-help-light;
@sk-help;
```

### Z-Indexes

To ensure correct relative elements stacking order, z-index variables are provided:

```less
@z-index-header-overlay;
@z-index-header;
@z-index-page-overlay;
@z-index-inline-overlay;
@z-index-negative;
```

### Accessible Color Variants

The contrast ratio of certain foreground/background color combinations don't meet the [AA accessibility standards](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast) that we aim for. As a result, a suite of accessible variants have been provided:

```less
@sk-mid-gray-on-white;
@sk-pink-on-gray-light;
@sk-learning-dark-on-gray-light;
@sk-business-on-gray-light;
@sk-link-on-mid-gray-light;
@sk-mid-gray-dark-on-gray-light;
```

Please note that this list is not exhaustive, so contributions are encouraged. To validate color combinations, we recommend the use of the web-based tool [Accessible Colors](http://accessible-colors.com) by [@moroshko](https://github.com/moroshko).

### Grid Variables

In order to ensure elements correctly follow the grid, element sizing should always be controlled by the following variables:

```less
@row-height;
@gutter-width;
@column-width;
@container-width;
```

When defining a document content container:

```less
.element {
  max-width: @container-width;
}
```

When defining heights and vertical padding/margins:

```less
.element {
  height: (@row-height * 3);
  padding-bottom: @row-height;
  margin-bottom: @row-height;
}
```

When defining widths and horizontal padding/margins:

```less
.element {
  width: (@column-width * 3);
  padding-right: @gutter-width;
  margin-right: @column-width;
}
```

It's important to note that any additions to these values (e.g. borders) will need to be negated to maintain rhythm:

```less
.element {
  @border-width: 1px;
  border-bottom: @border-width solid @sk-charcoal;
  padding-bottom: @row-height - @border-width;
}
```

## Standalone Header and Footer

If you're maintaining or updating a non-React app, a standalone JS + CSS + HTML package is provided when [installing from npm](#installation). The bundled JavaScript is provided as a [UMD package](https://github.com/umdjs/umd), providing a global `SeekHeaderFooter` object as a fallback for older apps without a proper module system.

First, include the following files in your app:

- `seek-style-guide/dist/header-footer/styles.css`
- `seek-style-guide/dist/header-footer/client.js`

Then, include the appropriate header and footer HTML snippets, switching based on locale:

**Header:**

- `seek-style-guide/dist/header-footer/header__au.html`
- `seek-style-guide/dist/header-footer/header__nz.html`

**Header, with "Career Advice" tab selected:**

- `seek-style-guide/dist/header-footer/header__au__career_advice.html`
- `seek-style-guide/dist/header-footer/header__nz__career_advice.html`

_Note: If you need a different tab selected, feel free to open a pull request or raise an issue_

**Footer:**

- `seek-style-guide/dist/header-footer/footer__au.html`
- `seek-style-guide/dist/header-footer/footer__nz.html`

When the document is ready, rehydrate the header by triggering a client-side render:

```js
var header = SeekHeaderFooter.renderHeader();

// Update props later, if needed:
header.updateProps({ ...newProps });
```

Finally, render the footer following a similar pattern:

```js
var footer = SeekHeaderFooter.renderFooter();

// Again, update props later, if needed:
footer.updateProps({ ...newProps });
```

If you'd prefer not to use the pre-rendered header and footer snippets and purely render client-side, you can manually pass the container element and initial props to the render methods yourself.

First, add placeholder elements to the page:

```html
<div id="header"></div>
<div id="footer"></div>
```

Then, trigger the initial render client-side:

```js
var header = SeekHeaderFooter.renderHeader(document.getElementById('header'), {
  ...props
});
var footer = SeekHeaderFooter.renderHeader(document.getElementById('footer'), {
  ...props
});
```

For more detail on accepted props, read the React documentation for [applying the standard header and footer](#applying-the-standard-header-and-footer).

If you need to create React elements (e.g. when providing a `linkRenderer` function), the standalone bundle also exports React's [createElement](https://facebook.github.io/react/docs/react-api.html#createelement) function so you don't need to install React separately to gain access to it:

```js
var link = SeekHeaderFooter.createElement('a', { href: '/jobs' }, 'Jobs');
```

## Advanced Usage

### Babel Plugin

**Note: If you're using [sku](https://github.com/seek-oss/sku), this plugin is already enabled.**

In order to help you optimise your bundle size, you can use [babel-plugin-seek-style-guide](https://github.com/seek-oss/babel-plugin-seek-style-guide).

```bash
$ npm install --save-dev babel-plugin-seek-style-guide
```

Then, add `seek-style-guide` to the plugins list in your Babel config. For example, in `.babelrc`:

```json
{
  "plugins": ["seek-style-guide"]
}
```

### Flow Type Checking

We've opted to include flow type checking in this project. If you're unfamiliar with static type checking you should start by reading React's [overview](https://reactjs.org/docs/static-type-checking.html).

This is completely opt-in and if you've decided not to use type checking in your project then **there is nothing you need to do**. It shouldn't impact your ability to include the style guide so long as you are using either [sku](https://github.com/seek-oss/sku) or our [webpack decorator](https://github.com/seek-oss/seek-style-guide-webpack).

Conversely, if you would like to opt-in to flow types you'll need to ensure that your `.flowconfig` includes a few exclusions and special options.

```
[ignore]
.*/node_modules/config-chain/.*
.*/node_modules/npmconf/.*

[include]

[libs]

[lints]

[options]
# This is required to prevent errors to less file imports
module.name_mapper.extension='less' -> '<PROJECT_ROOT>/no-declarations.js.flow'

# Good idea to ignore json too
module.name_mapper.extension='json' -> '<PROJECT_ROOT>/no-declarations.js.flow'
```

> _no-declarations.js.flow_ is just an empty file

## Sketch asset generation

On every successful build (via `npm test`), `asketch.json` files (i.e. _almost_ Sketch files) are generated by [html-sketchapp](https://github.com/brainly/html-sketchapp) containing document styles and symbols. These are provided via the following JSON files:

- `dist/asketch/document.asketch.json`
- `dist/asketch/page.asketch.json`

These can be manually imported into Sketch by [downloading html-sketchapp](https://github.com/brainly/html-sketchapp/archive/master.zip) and installing `asketch2sketch.sketchplugin`.

Once in Sketch, open the "Plugins" menu and select "From \*Almost\* Sketch to Sketch". Assuming you've run a full build of the style guide via `npm test`, you should now be able to select the `asketch.json` files in `dist/asketch`.

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md).

If you're planning to change the public API, please [open a new issue](https://github.com/seek-oss/seek-style-guide/issues/new) and follow the provided RFC template in the [GitHub issue template](.github/ISSUE_TEMPLATE.md).

## License

MIT.
