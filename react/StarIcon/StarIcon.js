import styles from './StarIcon.less';

import svgMarkup from './StarIcon.svg';
import svgMarkupFilled from './StarIconFilled.svg';

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Icon from '../Icon/Icon';

export default function StarIcon({ filled, className, ...props }) {
  const markup = filled ? svgMarkupFilled : svgMarkup;

  const combinedProps = {
    ...props,
    className: classnames({
      [styles.filled]: filled,
      [className]: className
    })
  };

  return <Icon markup={markup} {...combinedProps} />;
}

StarIcon.displayName = 'StarIcon';

StarIcon.propTypes = {
  filled: PropTypes.bool,
  className: PropTypes.string
};

StarIcon.defaultProps = {
  filled: false,
  className: ''
};
