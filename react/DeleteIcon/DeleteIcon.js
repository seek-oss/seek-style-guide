import svgMarkup from './DeleteIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function DeleteIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

DeleteIcon.displayName = 'DeleteIcon';
