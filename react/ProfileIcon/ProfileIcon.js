import svgMarkup from './ProfileIcon.svg';

import React from 'react';
import Icon from '../Icon/Icon';

export default function ProfileIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

ProfileIcon.displayName = 'ProfileIcon';
