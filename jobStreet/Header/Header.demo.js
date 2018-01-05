import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Header } from 'seek-asia-style-guide/jobStreet';

export const makeDummyLinkRendererForPath = path => {
  const DummyLinkRenderer = ({ href, ...props }) => (
    <Link to={`${path}#actualHref=${href}`} {...props} />
  );

  DummyLinkRenderer.propTypes = {
    href: PropTypes.string
  };

  return DummyLinkRenderer;
};

const ROUTE = '/jobstreet-header';

export default {
  route: ROUTE,
  tenantPath: 'jobStreet',
  title: 'JobStreet Header',
  component: Header,
  initialProps: {
    authenticationStatus: 'authenticated',
    user: {},
    linkRenderer: makeDummyLinkRendererForPath(ROUTE),
    returnUrl: '/jobs'
  },
  options: [
    {
      label: 'Authentication',
      type: 'radio',
      states: [
        {
          label: 'Authenticated',
          transformProps: props => props
        },
        {
          label: 'Unauthenticated',
          transformProps: ({ userName, ...props }) => ({
            ...props,
            authenticationStatus: 'unauthenticated'
          })
        },
        {
          label: 'Pending',
          transformProps: ({ userName, ...props }) => ({
            ...props,
            authenticationStatus: 'pending'
          })
        }
      ]
    }
  ]
};
