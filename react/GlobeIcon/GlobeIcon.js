import svgMarkup from './GlobeIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function GlobeIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

GlobeIcon.displayName = 'GlobeIcon';
