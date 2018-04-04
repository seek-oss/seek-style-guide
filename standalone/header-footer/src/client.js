import makeStandalone from './makeStandalone';
import Header from 'seek-asia-style-guide/jobsDB';
import Footer from 'seek-asia-style-guide/jobsDB';

export const renderHeader = makeStandalone(Header);
export const renderFooter = makeStandalone(Footer);

// Allow standalone header consumers to create React elements
import React from 'react';
export const createElement = React.createElement;
