import svgMarkup from './ChevronIcon.svg';
import styles from './ChevronIcon.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Icon from '../icon';

export default function ChevronIcon({ direction, className,  ...props }) {
  const combinedProps = {
    ...props,
    className: classnames({
      [styles.root]: true,
      [styles[direction]]: styles[direction],
      [className]: className
    })
  };

  return <Icon markup={svgMarkup} { ...combinedProps } />;
}

ChevronIcon.propTypes = {
  direction: React.PropTypes.oneOf([
    'up', 'down', 'right', 'left'
  ]).isRequired,
  className: PropTypes.string
};

ChevronIcon.defaultProps = {
  className: ''
};
