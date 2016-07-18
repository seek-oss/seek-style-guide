import svgMarkup from './GithubIcon.svg';

import React from 'react';
import Icon from '../../../../../../react/icons/icon';

export default function GithubIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

GithubIcon.displayName = 'GithubIcon';
