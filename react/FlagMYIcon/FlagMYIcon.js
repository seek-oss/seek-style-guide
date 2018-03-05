import svgMarkup from './FlagMYIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function FlagMYIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

FlagMYIcon.displayName = 'FlagMYIcon';
