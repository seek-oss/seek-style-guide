import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Header } from 'seek-style-guide/jobStreet';

export const makeDummyLinkRendererForPath = path => {
  const DummyLinkRenderer = ({ href, ...props }) => (
    <Link to={`${path}#actualHref=${href}`} {...props} />
  );

  DummyLinkRenderer.propTypes = {
    href: PropTypes.string
  };

  return DummyLinkRenderer;
};

const ROUTE = '/header';

export default {
  route: ROUTE,
  tenantPath: 'jobStreet',
  title: 'Header',
  component: Header,
  initialProps: {
    // authenticationStatus: 'authenticated',
    // username: 'Oliver Q.',
    authenticationStatus: 'unauthenticated',
    linkRenderer: makeDummyLinkRendererForPath(ROUTE),
    returnUrl: '/jobs',
    language: 'en',
    country: 'my'
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
          transformProps: ({ username, ...props }) => ({
            ...props,
            authenticationStatus: 'unauthenticated'
          })
        },
        {
          label: 'Pending',
          transformProps: ({ username, ...props }) => ({
            ...props,
            authenticationStatus: 'pending'
          })
        }
      ]
    }
  ]
};
