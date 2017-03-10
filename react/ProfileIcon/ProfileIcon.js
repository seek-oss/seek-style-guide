import svgMarkup from './ProfileIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function ProfileIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

ProfileIcon.displayName = 'ProfileIcon';
