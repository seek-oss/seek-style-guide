import svgMarkup from './TimeIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function TimeIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

TimeIcon.displayName = 'TimeIcon';
