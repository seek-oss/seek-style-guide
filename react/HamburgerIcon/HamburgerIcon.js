import svgMarkup from './HamburgerIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function HamburgerIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

HamburgerIcon.displayName = 'HamburgerIcon';
