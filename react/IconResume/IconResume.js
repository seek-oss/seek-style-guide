import svgMarkup from './IconResume.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconResume(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconResume.displayName = 'Resume icon';
