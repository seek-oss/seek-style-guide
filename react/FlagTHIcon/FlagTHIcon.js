import svgMarkup from './FlagTHIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function FlagTHIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

FlagTHIcon.displayName = 'FlagTHIcon';
