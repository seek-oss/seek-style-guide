import svgMarkup from './ResourcesIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function ResourcesIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

ResourcesIcon.displayName = 'ResourcesIcon';
