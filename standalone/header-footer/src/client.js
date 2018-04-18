import makeStandalone from './makeStandalone';
import Header from 'seek-asia-style-guide/jobsDB/Header/Header';
import Footer from 'seek-asia-style-guide/jobsDB/Footer/Footer';

export const renderHeader = makeStandalone(Header);
export const renderFooter = makeStandalone(Footer);

// Allow standalone header consumers to create React elements
import React from 'react';
export const createElement = React.createElement;
