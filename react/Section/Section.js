import styles from './Section.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Section({ children, className, header, ...restProps }) {
  return (
    <div
      {...restProps}
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.header]: header
      })}>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.bool
};
