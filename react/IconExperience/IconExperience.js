import svgMarkup from './IconExperience.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconExperience(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconExperience.displayName = 'Experience icon';
