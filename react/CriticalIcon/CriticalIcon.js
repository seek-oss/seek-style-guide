import svgMarkup from './CriticalIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function CriticalIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

CriticalIcon.displayName = 'CriticalIcon';
