import svgMarkup from './ThumbsUpIcon.svg';

import React from 'react';
import Icon from '../icon';

export default function ThumbsUpIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

ThumbsUpIcon.displayName = 'ThumbsUpIcon';
