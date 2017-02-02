import styles from './Card.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Card({ className, children, transparent }) {
  return (
    <div
      className={classnames({
        [className]: className,
        [styles.root]: true,
        [styles.transparent]: transparent
      })}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool
};
