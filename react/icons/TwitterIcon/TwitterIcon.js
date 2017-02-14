import svgMarkup from './TwitterIcon.svg';
import svgMarkupFilled from './TwitterIconFilled.svg';

import React, { PropTypes } from 'react';
import Icon from '../icon';

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
