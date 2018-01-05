import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { getNavLinks } from './links';
import Header from './Header';

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
    authenticationStatus: 'authenticated',
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
