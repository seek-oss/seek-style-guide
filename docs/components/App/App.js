import React, { PropTypes } from 'react';
import { StyleGuideProvider } from 'seek-style-guide/react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function App({ children }) {
  return (
    <StyleGuideProvider fullScreen={true} title="SEEK Style Guide">
      <Header />
      {children}
      <Footer />
    </StyleGuideProvider>
  );
}

App.propTypes = {
  children: PropTypes.node
};
