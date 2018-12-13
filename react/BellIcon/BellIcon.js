import svgMarkup from './BellIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function BellIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

BellIcon.displayName = 'LightBlubIcon';
