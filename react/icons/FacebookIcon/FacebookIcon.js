import svgMarkup from './FacebookIcon.svg';
import svgMarkupFilled from './FacebookIconFilled.svg';

import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function FacebookIcon({ filled, ...props }) {
  const markup = filled ? svgMarkupFilled : svgMarkup;

  return <Icon markup={markup} {...props} />;
}

FacebookIcon.displayName = 'FacebookIcon';

FacebookIcon.propTypes = {
  filled: PropTypes.bool
};

FacebookIcon.defaultProps = {
  filled: false
};
