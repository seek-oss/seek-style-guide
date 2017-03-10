import svgMarkup from './CheckMarkIcon.svg';

import React from 'react';
import Icon from '../Icon/Icon';

export default function CheckMarkIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

CheckMarkIcon.displayName = 'CheckMarkIcon';
