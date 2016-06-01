import svgMarkup from './ErrorIcon.svg';
import svgMarkupFilled from './ErrorIconFilled.svg';

import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function ErrorIcon({ filled, ...props }) {
  const markup = filled ? svgMarkupFilled : svgMarkup;

  return <Icon markup={markup} { ...props } />;
}

ErrorIcon.propTypes = {
  filled: PropTypes.bool
};

ErrorIcon.defaultProps = {
  filled: false
};
