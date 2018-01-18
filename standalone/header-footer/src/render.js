import React from 'react';
import { renderToString } from 'react-dom/server';
import dedent from 'dedent';
import serialize from 'serialize-javascript';
import { minify } from 'html-minifier';
import StandaloneProvider from './StandaloneProvider/StandaloneProvider';
import Header from 'seek-style-guide/react/Header/Header';
import Footer from 'seek-style-guide/react/Footer/Footer';

const renderHtml = (Component, initialProps, options = { preview: false }) => {
  const componentHtml = renderToString(
    <StandaloneProvider
      component={Component}
      initialProps={initialProps}
      registerPropsUpdater={() => {}}
    />
  );

  const html = `
    ${!options.preview ? '' : `
      <!DOCTYPE html>
      <head>
        <style type="text/css">html,body{padding:0;margin:0;}</style>
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </head>
      <body>
    `}

    <div id="__SSG_${Component.displayName}__">${componentHtml}</div>
    <script type="text/javascript">window.__SSG_${Component.displayName}_props__ = ${serialize(initialProps)}</script>

    ${!options.preview ? '' : dedent`
      <script type="text/javascript" src="client.js"></script>
      <script type="text/javascript">
        // Create the instance
        window.seek${Component.displayName}Instance = SeekHeaderFooter.render${Component.displayName}();

        // Simulate authenticating the user
        seek${Component.displayName}Instance.updateProps({ authenticationStatus: 'authenticated', userName: 'Olivia' });

        // Let developers know what's up
        console.log("The standalone ${Component.displayName.toLowerCase()} instance is available as 'window.seek${Component.displayName}Instance'");
      </script>
      </body>
    `}
  `;

  return minify(html, { collapseWhitespace: true });
};

const renderFileForLocale = (Component, props, locale, fileNameSuffix) => {
  if (typeof Component.displayName !== 'string') {
    throw new Error('Component must have a display name');
  }

  const fileName = `${Component.displayName.toLowerCase()}__${locale.toLowerCase()}${fileNameSuffix ? `__${fileNameSuffix}` : ''}`;

  const localeProps = locale !== 'AU' ? { locale } : {};
  const renderProps = { ...props, ...localeProps };

  return {
    [`/${fileName}.html`]: renderHtml(Header, renderProps),
    [`/${fileName}__preview.html`]: renderHtml(Header, renderProps, { preview: true })
  };
};

const renderFiles = (Component, props = {}, fileNameSuffix) => {
  return {
    ...renderFileForLocale(Component, props, 'AU', fileNameSuffix),
    ...renderFileForLocale(Component, props, 'NZ', fileNameSuffix)
  };
};

export default () => ({
  ...renderFiles(Header),
  ...renderFiles(Header, { activeTab: 'Career Advice' }, 'career_advice'),
  ...renderFiles(Footer),

  // Provide old "advice_and_tips" file for backwards compatibility:
  ...renderFiles(Header, { activeTab: 'Career Advice' }, 'advice_and_tips')
});
