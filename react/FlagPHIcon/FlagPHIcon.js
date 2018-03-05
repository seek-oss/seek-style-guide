import svgMarkup from './FlagPHIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function FlagPHIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

FlagPHIcon.displayName = 'FlagPHIcon';
