import styles from './TickCircleIcon.less';

import svgMarkup from './TickCircleIcon.svg';
import svgMarkupFilled from './TickCircleIconFilled.svg';

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Icon from '../icon';

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
