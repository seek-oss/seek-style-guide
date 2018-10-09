import svgMarkup from './BuildingIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function BuildingIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

BuildingIcon.displayName = 'BuildingIcon';
