import React, { PropTypes } from 'react';
import { SeekApp } from 'seek-style-guide/react';

import Header from 'Header/Header';
import Footer from 'Footer/Footer';

const titles = {
  '/': 'living style',
  '/icons': 'icons',
  '/buttons': 'buttons',
  '/textfields': 'text fields',
  '/autosuggest': 'autosuggest',
  '/textarea': 'textarea',
  '/dropdown': 'dropdown',
  '/typography': 'typography'
};

export default function App({ routes, children }) {
  return (
    <SeekApp fullScreen={true}>
      <Header title={titles[routes[routes.length - 1].path || '/']} />
      <main>
        {children}
      </main>
      <Footer />
    </SeekApp>
  );
}

App.propTypes = {
  routes: PropTypes.array,
  children: PropTypes.node
};
