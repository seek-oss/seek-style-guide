import svgMarkup from './DownRightArrowIcon.svg';

import React from 'react';
import Icon from '../icon';

export default function DownRightArrowIcon(props) {
  return <Icon markup={svgMarkup} { ...props } />;
}

DownRightArrowIcon.displayName = 'DownRightArrowIcon';
