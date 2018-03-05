import svgMarkup from './FlagIDIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function FlagIDIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

FlagIDIcon.displayName = 'FlagIDIcon';
