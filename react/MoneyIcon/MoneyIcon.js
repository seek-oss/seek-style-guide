import svgMarkup from './MoneyIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function MoneyIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

MoneyIcon.displayName = 'MoneyIcon';
