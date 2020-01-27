import svgMarkup from './ArticleIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function ArticleIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

ArticleIcon.displayName = 'ArticleIcon';
