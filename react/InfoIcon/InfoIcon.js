import svgMarkup from './InfoIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function InfoIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

InfoIcon.displayName = 'InfoIcon';
