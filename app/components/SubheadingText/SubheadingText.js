import styles from './SubheadingText.less';

import React, { PropTypes } from 'react';

export default function SubheadingText({ children }) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
}

SubheadingText.propTypes = {
  children: PropTypes.node
};
