import makeStandalone from './makeStandalone';
import Header from 'seek-style-guide/react/Header/Header';
import Footer from 'seek-style-guide/react/Footer/Footer';
import LogoRainbow from 'seek-style-guide/react/LogoRainbow/LogoRainbow';

export const renderHeader = makeStandalone(Header, { logoComponent: LogoRainbow });
export const renderFooter = makeStandalone(Footer);

// Allow standalone header consumers to create React elements
import React from 'react';
export const createElement = React.createElement;
