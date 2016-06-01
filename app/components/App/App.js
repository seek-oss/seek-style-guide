import styles from  './App.less';

import React, { PropTypes } from 'react';
import { SeekApp } from 'seek-style-guide/react';

import Header from 'Header/Header';
import Footer from 'Footer/Footer';

export default function App({ children }) {
  return (
    <SeekApp fullScreen={true}>
      <div className={styles.root}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </SeekApp>
  );
}

App.propTypes = {
  children: PropTypes.node
};
