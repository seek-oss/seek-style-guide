require('seek-style-guide/fonts/bundle');

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Router from './Router';

const appElement = document.getElementById('app');

render(
  <AppContainer>
    <Router />
  </AppContainer>,
  appElement
);

if (module.hot) {
  // Only inject the snippet at dev time
  const renderFontSnippet = require('seek-style-guide/fonts').renderFontSnippet;

  renderFontSnippet({
    baseHref: `${process.env.BASE_HREF}dist/`,
    evaluate: true
  });

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
