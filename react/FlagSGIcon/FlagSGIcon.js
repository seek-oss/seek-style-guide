import svgMarkup from './FlagSGIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function FlagSGIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

FlagSGIcon.displayName = 'FlagSGIcon';
