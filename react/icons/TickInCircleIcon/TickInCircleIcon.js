import svgMarkup from './TickInCircleIcon.svg';

import React from 'react';
import Icon from '../icon';

export default function TickInCircleIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

TickInCircleIcon.displayName = 'TickInCircleIcon';
