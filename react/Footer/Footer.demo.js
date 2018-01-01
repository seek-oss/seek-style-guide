import { Footer } from 'seek-style-guide/react';
import * as sketch from './Footer.sketch';
import { makeDummyLinkRendererForPath } from '../Header/Header.demo';

const ROUTE = '/footer';

export default {
  route: '/footer',
  title: 'Footer',
  component: Footer,
  sketch,
  initialProps: {
    authenticationStatus: 'authenticated',
    linkRenderer: makeDummyLinkRendererForPath(ROUTE)
  },
  options: [
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
          transformProps: props => ({
            ...props,
            authenticationStatus: 'unauthenticated'
          })
        },
        {
          label: 'Pending',
          transformProps: props => ({
            ...props,
            authenticationStatus: 'pending'
          })
        }
      ]
    }
  ]
};
