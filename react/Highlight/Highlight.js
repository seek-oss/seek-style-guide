import styles from './Highlight.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Highlight({ children, secondary, className, ...restProps }) {
  return (
    <span
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [styles.secondary]: secondary,
        className
      })}>
      {children}
    </span>
  );
}

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  className: PropTypes.string
};
