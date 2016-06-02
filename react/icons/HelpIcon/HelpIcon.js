import svgMarkup from './HelpIcon.svg';

import React from 'react';
import Icon from '../icon';

export default function HelpIcon(props) {
  return <Icon markup={svgMarkup} { ...props } />;
}

HelpIcon.displayName = 'HelpIcon';
