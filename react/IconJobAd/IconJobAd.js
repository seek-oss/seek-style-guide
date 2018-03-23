import svgMarkup from './IconJobAd.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function IconJobAd(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

IconJobAd.displayName = 'Job Ad icon';
