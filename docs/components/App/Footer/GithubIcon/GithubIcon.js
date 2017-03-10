import svgMarkup from './GithubIcon.svg';
import React from 'react';
import Icon from 'seek-style-guide/react/Icon/Icon';

export default function GithubIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

GithubIcon.displayName = 'GithubIcon';
