import React from 'react';
import { hydrate, render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import BrowserRouter from './BrowserRouter';

import includes from 'array-includes';
if (!Array.prototype.includes) {
  includes.shim();
}

const appElement = document.getElementById('app');

hydrate(
  <AppContainer>
    <BrowserRouter />
  </AppContainer>,
  appElement
);

if (module.hot) {
  module.hot.accept('./BrowserRouter', () => {
    const NextBrowserRouter = require('./BrowserRouter').default;

    render(
      <AppContainer>
        <NextBrowserRouter />
      </AppContainer>,
      appElement
    );
  });
}
