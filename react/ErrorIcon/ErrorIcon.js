import svgMarkup from './ErrorIcon.svg';
import svgMarkupFilled from './ErrorIconFilled.svg';

import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../private/Icon/Icon';

export default function ErrorIcon({ filled, ...props }) {
  const markup = filled ? svgMarkupFilled : svgMarkup;

  return <Icon markup={markup} {...props} />;
}

ErrorIcon.displayName = 'ErrorIcon';

ErrorIcon.propTypes = {
  filled: PropTypes.bool
};

ErrorIcon.defaultProps = {
  filled: false
};
