import svgMarkup from './GithubIcon.svg';
import React from 'react';
import Icon from 'seek-style-guide/react/icons/icon';

export default function GithubIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

GithubIcon.displayName = 'GithubIcon';
