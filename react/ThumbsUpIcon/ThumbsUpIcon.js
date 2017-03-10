import svgMarkup from './ThumbsUpIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function ThumbsUpIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

ThumbsUpIcon.displayName = 'ThumbsUpIcon';
