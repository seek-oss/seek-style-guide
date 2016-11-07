import svgMarkup from './CheckMarkIcon.svg';

import React from 'react';
import Icon from '../icon';

export default function CheckMarkIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

CheckMarkIcon.displayName = 'CheckMarkIcon';
