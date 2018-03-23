import svgMarkup from './IconEducation.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconEducation(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconEducation.displayName = 'Education icon';
