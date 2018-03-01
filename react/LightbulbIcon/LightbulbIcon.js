import svgMarkup from './LightbulbIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function LightbulbIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

LightbulbIcon.displayName = 'LightbulbIcon';
