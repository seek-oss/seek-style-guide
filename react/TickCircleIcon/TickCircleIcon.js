import styles from './TickCircleIcon.less';

import svgMarkup from './TickCircleIcon.svg';
import svgMarkupFilled from './TickCircleIconFilled.svg';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../private/Icon/Icon';

export default function TickCircleIcon({ filled, className, ...props }) {
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

TickCircleIcon.displayName = 'TickCircleIcon';

TickCircleIcon.propTypes = {
  filled: PropTypes.bool,
  className: PropTypes.string
};

TickCircleIcon.defaultProps = {
  filled: false,
  className: ''
};
