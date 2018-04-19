import svgMarkup from './LightBulbIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function LightBulbIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

LightBulbIcon.displayName = 'LightBlubIcon';
