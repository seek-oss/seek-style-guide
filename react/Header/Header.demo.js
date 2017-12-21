import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header } from 'seek-style-guide/react';
import * as sketch from './Header.sketch';
import LogoRainbow from '../LogoRainbow/LogoRainbow';

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
  title: 'Header',
  component: Header,
  sketch,
  initialProps: {
    authenticationStatus: 'authenticated',
    userName: 'Olivia',
    userEmail: 'olivia.smith@example.com',
    divider: false,
    linkRenderer: makeDummyLinkRendererForPath(ROUTE),
    returnUrl: '/jobs'
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Divider',
          transformProps: props => ({
            ...props,
            divider: true
          })
        },
        {
          label: 'No User Name',
          transformProps: props => ({
            ...props,
            userName: ''
          })
        },
        {
          label: 'Custom Logo',
          transformProps: props => ({
            ...props,
            logoComponent: LogoRainbow
          })
        }
      ]
    },
    {
      label: 'Active Tab',
      type: 'radio',
      states: [
        null,
        'Job Search',
        '$150k+ Jobs',
        'Profile',
        'Saved & Applied Jobs',
        'Recommended Jobs',
        'Company Reviews',
        'Advice & Tips'
      ].map(activeTab => ({
        label: activeTab || 'No active tab',
        transformProps: props => ({
          ...props,
          activeTab
        })
      }))
    },
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
    },
    {
      label: 'Locale',
      type: 'radio',
      states: [
        {
          label: 'AU',
          transformProps: props => props
        },
        {
          label: 'NZ',
          transformProps: props => ({
            ...props,
            locale: 'NZ'
          })
        }
      ]
    }
  ]
};
