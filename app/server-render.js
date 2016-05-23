import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext, createMemoryHistory } from 'react-router';
import routes from './routes';

const baseHref = process.env.BASE_HREF || '/';

// Static site renderer
export default ({ path, template }, callback) => {
  const history = createMemoryHistory(path);

  match({ routes, history }, (error, redirectLocation, renderProps) => {
    const html = renderToString(
      <RouterContext {...renderProps} />
    );

    callback(null, template({ html, baseHref }));
  });
};
