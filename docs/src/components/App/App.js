import React from 'react';
import PropTypes from 'prop-types';

import { StyleGuideProvider } from 'seek-style-guide/react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const tenant = process.env.SKU_TENANT;

export default function App({ children }) {
  return (
    <StyleGuideProvider fullScreen={true} title="SEEK Style Guide" enableWebFont={true}>
      <Header tenant={tenant} />
      {children}
      <Footer />
    </StyleGuideProvider>
  );
}

App.propTypes = {
  children: PropTypes.node
};
