import styles from './Subheading.less';

import React, { PropTypes } from 'react';

export default function Subheading({ children }) {
  return (
    <h1 className={styles.root}>{children}</h1>
  );
}

Subheading.propTypes = {
  children: PropTypes.node
};
