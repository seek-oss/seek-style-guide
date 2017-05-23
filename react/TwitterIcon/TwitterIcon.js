import svgMarkup from './TwitterIcon.svg';
import svgMarkupFilled from './TwitterIconFilled.svg';

import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../private/Icon/Icon';

export default function TwitterIcon({ filled, ...props }) {
  const markup = filled ? svgMarkupFilled : svgMarkup;

  return <Icon markup={markup} {...props} />;
}

TwitterIcon.displayName = 'TwitterIcon';

TwitterIcon.propTypes = {
  filled: PropTypes.bool
};

TwitterIcon.defaultProps = {
  filled: false
};
