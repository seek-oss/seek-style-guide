import styles from  './App.less';

import React, { PropTypes } from 'react';
import { SeekApp } from 'seek-style-guide/react';

export default function App({ children }) {
  return (
    <SeekApp fullScreen={true}>
      <div className={styles.root}>
        <main>
          {children}
        </main>
      </div>
    </SeekApp>
  );
}

App.propTypes = {
  children: PropTypes.node
};
