import svgMarkup from './SearchIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function SearchIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

SearchIcon.displayName = 'SearchIcon';
