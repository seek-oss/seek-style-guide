import svgMarkup from './IconNegative.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconNegative(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconNegative.displayName = 'Negative icon';
