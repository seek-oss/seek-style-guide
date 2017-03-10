import svgMarkup from './ClearIcon.svg';

import React from 'react';
import Icon from '../Icon/Icon';

export default function ClearIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

ClearIcon.displayName = 'ClearIcon';
