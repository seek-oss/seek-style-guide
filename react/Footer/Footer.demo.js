import { Footer } from 'seek-style-guide/react';
import { makeDummyLinkRendererForPath } from '../Header/Header.demo';

const ROUTE = '/footer';

export default {
  route: '/footer',
  title: 'Footer',
  component: Footer,
  initialProps: {
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
    }
  ]
};
