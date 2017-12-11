import svgMarkup from './JobMailNewStyleIcon.svg';
import successfullySignedUpMarkup from './JobMailNewStyleIconSuccess.svg';
import React from 'react';
import Icon from '../private/Icon/Icon';

export default function MailIcon(props) {
  const { successfullySignedUp, ...restProps } = props;
  if (successfullySignedUp) {
    return <Icon markup={successfullySignedUpMarkup} {...restProps} />;
  }
  return <Icon markup={svgMarkup} {...restProps} />;
}

MailIcon.displayName = 'JobMailNewStyleIcon';
