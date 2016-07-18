import styles from './StandardText.less';

import React, { PropTypes } from 'react';

export default function StandardText({ children }) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
}

StandardText.propTypes = {
  children: PropTypes.node
};
