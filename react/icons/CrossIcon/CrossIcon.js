import svgMarkup from './CrossIcon.svg';

import React from 'react';
import Icon from '../icon';

export default function CrossIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

CrossIcon.displayName = 'CrossIcon';
