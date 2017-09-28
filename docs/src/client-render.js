import React from 'react';
import { hydrate, render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Router from './Router';

const appElement = document.getElementById('app');

hydrate(
  <AppContainer>
    <Router />
  </AppContainer>,
  appElement
);

if (module.hot) {
  module.hot.accept('./Router', () => {
    const NextRouter = require('./Router').default;

    render(
      <AppContainer>
        <NextRouter />
      </AppContainer>,
      appElement
    );
  });
}
