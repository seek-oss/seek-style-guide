import svgMarkup from './ChevronIcon.svg';
import styles from './ChevronIcon.less';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Icon from '../private/Icon/Icon';

export default function ChevronIcon({ direction, className, ...props }) {
  const combinedProps = {
    ...props,
    className: classnames(styles.root, styles[direction], className)
  };

  return <Icon markup={svgMarkup} {...combinedProps} />;
}

ChevronIcon.displayName = 'ChevronIcon';

ChevronIcon.propTypes = {
  direction: PropTypes.oneOf([
    'up', 'down', 'right', 'left'
  ]).isRequired,
  className: PropTypes.string
};

ChevronIcon.defaultProps = {
  className: ''
};
