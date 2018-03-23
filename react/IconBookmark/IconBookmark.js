import svgMarkup from './IconBookmark.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconBookmark(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconBookmark.displayName = 'Bookmark icon';
