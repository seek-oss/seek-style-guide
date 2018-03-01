import svgMarkup from './FlagHKIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function FlagHKIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

FlagHKIcon.displayName = 'FlagHKIcon';
