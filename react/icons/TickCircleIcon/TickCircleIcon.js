import svgMarkup from './TickCircleIcon.svg';

import React from 'react';
import Icon from '../icon';

export default function TickCircleIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

TickCircleIcon.displayName = 'TickCircleIcon';
