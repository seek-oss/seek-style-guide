import svgMarkup from './TriangleArrowDownIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function TriangleArrowDownIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

TriangleArrowDownIcon.displayName = 'TriangleArrowDownIcon';
