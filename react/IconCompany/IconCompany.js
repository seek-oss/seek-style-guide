import svgMarkup from './IconCompany.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconCompany(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconCompany.displayName = 'Company icon';
