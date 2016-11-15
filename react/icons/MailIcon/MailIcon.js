import svgMarkup from './MailIcon.svg';

import React from 'react';
import Icon from '../icon';

export default function MailIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

MailIcon.displayName = 'MailIcon';
