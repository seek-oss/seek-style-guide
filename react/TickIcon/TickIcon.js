import svgMarkup from './TickIcon.svg';

import React from 'react';
import Icon from '../Icon/Icon';

export default function TickIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

TickIcon.displayName = 'TickIcon';
