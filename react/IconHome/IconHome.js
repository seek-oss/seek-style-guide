import svgMarkup from './IconHome.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconHome(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconHome.displayName = 'Home icon';
