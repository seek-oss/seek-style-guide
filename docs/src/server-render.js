import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import purifyCss from 'purify-css';
import App from 'App/App';

const baseHref = process.env.BASE_HREF || '/';

// Static site renderer
export default ({ path, template, css }) => new Promise(resolve => {
  const html = renderToString(
    <StaticRouter location={path} context={{}}>
      <App />
    </StaticRouter>
  );

  const purifyOptions = {
    minify: true,
    whitelist: ['*:not*'] // https://github.com/purifycss/purifycss/issues/161
  };

  purifyCss(`<html><body>${html}</body></html>`, css, purifyOptions, criticalCss => {
    resolve(template({ html, baseHref, criticalCss }));
  });
});
