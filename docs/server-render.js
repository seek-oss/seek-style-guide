import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext, createMemoryHistory } from 'react-router';
import routes from './Routes';
import { renderFontSnippet } from 'seek-style-guide/fonts';

const baseHref = process.env.BASE_HREF || '/';

// Static site renderer
export default ({ path, template }, callback) => {
  const history = createMemoryHistory(path);

  match({ routes, history }, (error, redirectLocation, renderProps) => {
    const html = renderToString(
      <RouterContext {...renderProps} />
    );

    const fontSnippet = renderFontSnippet({ baseHref });

    callback(null, template({ html, fontSnippet, baseHref }));
  });
};
