import svgMarkup from './EmployerIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function EmployerIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

EmployerIcon.displayName = 'EmployerIcon';
