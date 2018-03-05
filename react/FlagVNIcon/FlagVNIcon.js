import svgMarkup from './FlagVNIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function FlagVNIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

FlagVNIcon.displayName = 'FlagVNIcon';
