import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Header from './Header';
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_PENDING
} from 'seek-asia-style-guide/react/private/authStatusTypes';

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
    authenticationStatus: AUTHENTICATED,
    username: 'Oliver Q.',
    userToken: 'youcannotseemeiamhidden',
    linkRenderer: makeDummyLinkRendererForPath(ROUTE),
    returnUrl: '/jobs',
    language: 'en',
    country: 'my',
    activeNavLinkTextKey: 'header.searchText'
  },
  options: [
    {
      label: 'Language',
      type: 'radio',
      states: [
        {
          label: 'en-MY',
          transformProps: props => props
        }
      ]
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
          transformProps: ({ username, ...props }) => ({
            ...props,
            authenticationStatus: UNAUTHENTICATED
          })
        },
        {
          label: 'Pending',
          transformProps: ({ username, ...props }) => ({
            ...props,
            authenticationStatus: AUTH_PENDING
          })
        }
      ]
    },
    {
      label: 'Active Main Nav',
      type: 'radio',
      states: [
        {
          label: 'Search Jobs',
          transformProps: props => props
        },
        {
          label: 'Home',
          transformProps: ({ activeNavLinkTextKey, ...props }) => ({
            ...props,
            activeNavLinkTextKey: 'header.homeText'
          })
        },
        {
          label: 'MyJobStreet',
          transformProps: ({ activeNavLinkTextKey, ...props }) => ({
            ...props,
            activeNavLinkTextKey: 'header.myJobStreetText'
          })
        },
        {
          label: 'Company Profiles',
          transformProps: ({ activeNavLinkTextKey, ...props }) => ({
            ...props,
            activeNavLinkTextKey: 'header.companyProfilesText'
          })
        },
        {
          label: 'Career Insights',
          transformProps: ({ activeNavLinkTextKey, ...props }) => ({
            ...props,
            activeNavLinkTextKey: 'header.careerInsightsText'
          })
        },
        {
          label: 'Education',
          transformProps: ({ activeNavLinkTextKey, ...props }) => ({
            ...props,
            activeNavLinkTextKey: 'header.jobStreetEducationText'
          })
        }
      ]
    }
  ]
};
