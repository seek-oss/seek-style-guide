import makeStandalone from './makeStandalone';
import Header from 'seek-style-guide/react/Header/Header';
import Footer from 'seek-style-guide/react/Footer/Footer';

export const renderHeader = makeStandalone(Header);
export const renderFooter = makeStandalone(Footer);

// Allow standalone header consumers to create React elements
import React from 'react';
export const createElement = React.createElement;
