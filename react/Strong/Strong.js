import styles from './Strong.less';
import React, { PropTypes } from 'react';

export default function Strong({ children }) {
  return (
    <strong className={styles.root}>
      {children}
    </strong>
  );
}

Strong.propTypes = {
  children: PropTypes.node.isRequired
};
