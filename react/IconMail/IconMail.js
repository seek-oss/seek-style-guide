import svgMarkup from './IconMail.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconMail(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconMail.displayName = 'Mali icon';
