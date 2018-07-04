import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PartnerSites from './PartnerSites';

export const makeDummyLinkRendererForPath = path => {
  const DummyLinkRenderer = ({ href, ...props }) => (
    <Link to={`${path}#actualHref=${href}`} {...props} />
  );

  DummyLinkRenderer.propTypes = {
    href: PropTypes.string
  };

  return DummyLinkRenderer;
};

const ROUTE = '/partner-sites';

export default {
  route: ROUTE,
  title: 'Partner Sites',
  category: 'Layout',
  component: PartnerSites,
  initialProps: {
    locale: 'AU',
    linkRenderer: makeDummyLinkRendererForPath(ROUTE)
  },
  options: [
    {
      label: 'Locale States',
      type: 'checklist',
      states: [
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
      label: 'Active Product',
      type: 'radio',
      states: [
        null,
        'Jobs',
        'Courses',
        'Businesses for sale',
        'Volunteering'
      ].map(activeProduct => ({
        label: activeProduct || 'No active product',
        transformProps: props => ({
          ...props,
          activeProduct
        })
      }))
    }
  ]
};
