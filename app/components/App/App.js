import styles from  './App.less';

import React, { PropTypes } from 'react';
import { SeekApp } from 'seek-style-guide/react';

import Header from 'Header/Header';
import Footer from 'Footer/Footer';

const titles = {
  '/': 'living style',
  '/icons': 'icons',
  '/buttons': 'buttons',
  '/textfields': 'text fields',
  '/typography': 'typography'
};

export default function App({ location, children }) {
  return (
    <SeekApp fullScreen={true}>
      <div className={styles.root}>
        <Header title={titles[location.pathname]} />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </SeekApp>
  );
}

App.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node
};
