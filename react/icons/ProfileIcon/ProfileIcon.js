import svgMarkup from './ProfileIcon.svg';

import React from 'react';
import Icon from '../icon';

export default function ProfileIcon(props) {
  return <Icon markup={svgMarkup} { ...props } />;
}
