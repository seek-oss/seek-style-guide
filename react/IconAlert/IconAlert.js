import svgMarkup from './IconAlert.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconAlert(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconAlert.displayName = 'Alert Icon';
