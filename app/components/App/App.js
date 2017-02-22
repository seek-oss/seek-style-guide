import React, { PropTypes } from 'react';
import { StyleGuideProvider } from 'seek-style-guide/react';

import Header from 'Header/Header';
import Footer from 'Footer/Footer';

const titles = {
  '/': 'living style',
  '/icons': 'icons',
  '/buttons': 'buttons',
  '/textfields': 'text fields',
  '/autosuggest': 'autosuggest',
  '/textarea': 'textarea',
  '/monthpicker': 'month picker',
  '/dropdown': 'dropdown',
  '/rating': 'rating',
  '/checkbox': 'checkbox',
  '/typography': 'typography',
  '/playground': 'playground'
};

export default function App({ routes, children }) {
  return (
    <StyleGuideProvider fullScreen={true} title="SEEK Style Guide">
      <Header title={titles[routes[routes.length - 1].path || '/']} />
      <main>
        {children}
      </main>
      <Footer />
    </StyleGuideProvider>
  );
}

App.propTypes = {
  routes: PropTypes.array,
  children: PropTypes.node
};
