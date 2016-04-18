seek-style-guide
================

Living style guide containing the building blocks and design principles for SEEK web apps.

## Getting Started
Coming soon!


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
