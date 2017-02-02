import styles from './Secondary.less';
import React, { PropTypes } from 'react';

export default function Secondary({ children }) {
  return (
    <span className={styles.root}>
      {children}
    </span>
  );
}

Secondary.propTypes = {
  children: PropTypes.node.isRequired
};
