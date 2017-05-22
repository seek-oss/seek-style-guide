import styles from './StarIcon.less';

import svgMarkup from './StarIcon.svg';
import svgMarkupFilled from './StarIconFilled.svg';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Icon from '../private/Icon/Icon';

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
