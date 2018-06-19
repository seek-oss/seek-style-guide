import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from 'App/App';

const baseHref = process.env.BASE_HREF || '/';

// Static site renderer
export default ({ path, template }) => {
  const html = renderToString(
    <StaticRouter location={path} context={{}}>
      <App />
    </StaticRouter>
  );

  return template({ html, baseHref });
};
