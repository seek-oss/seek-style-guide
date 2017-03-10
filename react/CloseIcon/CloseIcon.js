import svgMarkup from './CloseIcon.svg';

import React from 'react';
import Icon from '../Icon/Icon';

export default function CloseIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

CloseIcon.displayName = 'CloseIcon';
