import styles from './HeartIcon.less';

import svgMarkup from './HeartIcon.svg';
import svgMarkupFilled from './HeartIconFilled.svg';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Icon from '../private/Icon/Icon';

export default function HeartIcon({ filled, className, ...props }) {
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

HeartIcon.displayName = 'HeartIcon';

HeartIcon.propTypes = {
  filled: PropTypes.bool,
  className: PropTypes.string
};

HeartIcon.defaultProps = {
  filled: false,
  className: ''
};
