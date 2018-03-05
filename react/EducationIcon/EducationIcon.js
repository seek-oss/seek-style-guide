import svgMarkup from './EducationIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function EducationIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

EducationIcon.displayName = 'EducationIcon';
