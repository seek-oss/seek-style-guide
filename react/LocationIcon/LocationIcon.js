import svgMarkup from './LocationIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function LocationIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

LocationIcon.displayName = 'LocationIcon';
