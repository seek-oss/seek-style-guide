import React, { PropTypes } from 'react';
import { Header } from 'seek-style-guide/react';

export const dummyLinkRenderer = ({ href, ...props }) => (
  <a href={`#actualHref=${href}`} {...props} />
);
dummyLinkRenderer.propTypes = {
  href: PropTypes.string
};

export default {
  route: '/header',
  title: 'Header',
  component: Header,
  initialProps: {
    authenticationStatus: 'authenticated',
    userName: 'Olivia',
    divider: false,
    linkRenderer: dummyLinkRenderer,
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
