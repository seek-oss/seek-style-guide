import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import GlobalNav from './GlobalNav';

export const makeDummyLinkRendererForPath = path => {
  const DummyLinkRenderer = ({ href, ...props }) => (
    <Link to={`${path}#actualHref=${href}`} {...props} />
  );

  DummyLinkRenderer.propTypes = {
    href: PropTypes.string
  };

  return DummyLinkRenderer;
};

const ROUTE = '/global-nav';

export default {
  route: ROUTE,
  title: 'Global Nav',
  category: 'Layout',
  component: GlobalNav,
  initialProps: {
    locale: 'AU',
    linkRenderer: makeDummyLinkRendererForPath(ROUTE),
    hideLocales: false
  },
  options: [
    {
      label: 'Locale States',
      type: 'checklist',
      states: [
        {
          label: 'Hide locales',
          transformProps: props => ({
            ...props,
            hideLocales: true
          })
        },
        {
          label: 'Switch to NZ site',
          transformProps: props => ({
            ...props,
            locale: 'NZ'
          })
        }
      ]
    },
    {
      label: 'Active Partner Site',
      type: 'radio',
      states: [
        null,
        'jobs',
        'courses',
        'businesses',
        'volunteering'
      ].map(activePartnerSite => ({
        label: activePartnerSite || 'No active partner',
        transformProps: props => ({
          ...props,
          activePartnerSite
        })
      }))
    }
  ]
};
