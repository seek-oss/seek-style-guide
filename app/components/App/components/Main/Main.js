import styles from './Main.less';

import React, { PropTypes } from 'react';

export default function Main({ children }) {
  return (
    <main className={styles.root}>
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node
};
