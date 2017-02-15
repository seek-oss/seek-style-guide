import styles from './Separator.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Separator({ children, className, ...restProps }) {
  return (
    <div
      {...restProps}
      className={classnames({
        [className]: className,
        [styles.root]: true
      })}>
      {children}
    </div>
  );
}

Separator.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
