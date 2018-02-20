import svgMarkup from './PlusIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function PlusIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

PlusIcon.displayName = 'PlusIcon';
