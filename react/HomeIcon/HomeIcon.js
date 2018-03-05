import svgMarkup from './HomeIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function HomeIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

HomeIcon.displayName = 'HomeIcon';
