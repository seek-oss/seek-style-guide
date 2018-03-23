import svgMarkup from './IconSearch.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconSearch(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconSearch.displayName = 'Search icon';
