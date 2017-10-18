import svgMarkup from './JobFunctionIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function JobFunctionIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

JobFunctionIcon.displayName = 'JobFunctionIcon';
