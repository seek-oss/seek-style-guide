import svgMarkup from './CrossIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function CrossIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

CrossIcon.displayName = 'CrossIcon';
