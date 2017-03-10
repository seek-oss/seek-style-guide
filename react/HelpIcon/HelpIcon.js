import svgMarkup from './HelpIcon.svg';

import React from 'react';
import Icon from '../Icon/Icon';

export default function HelpIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

HelpIcon.displayName = 'HelpIcon';
