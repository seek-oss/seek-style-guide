import svgMarkup from './CompanyIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function CompanyIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

CompanyIcon.displayName = 'CompanyIcon';
