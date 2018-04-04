import svgMarkup from './IconPositive.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconPositive(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconPositive.displayName = 'Positive icon';
