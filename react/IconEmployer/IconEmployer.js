import svgMarkup from './IconEmployer.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconEmployer(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconEmployer.displayName = 'Employer icon';
