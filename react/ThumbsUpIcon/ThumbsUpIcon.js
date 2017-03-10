import svgMarkup from './ThumbsUpIcon.svg';

import React from 'react';
import Icon from '../Icon/Icon';

export default function ThumbsUpIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

ThumbsUpIcon.displayName = 'ThumbsUpIcon';
