import svgMarkup from './EventIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function EventIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

EventIcon.displayName = 'EventIcon';
