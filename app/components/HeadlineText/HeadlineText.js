import styles from './HeadlineText.less';

import React, { PropTypes } from 'react';

export default function HeadlineText({ children }) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
}

HeadlineText.propTypes = {
  children: PropTypes.node
};
