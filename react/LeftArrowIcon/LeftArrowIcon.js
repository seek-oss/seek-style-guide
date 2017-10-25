import svgMarkup from './LeftArrowIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function LeftArrowIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

LeftArrowIcon.displayName = 'LeftArrowIcon';
