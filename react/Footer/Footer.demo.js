import { Footer } from 'seek-style-guide/react';
import { dummyLinkRenderer } from '../Header/Header.demo';

export default {
  route: '/footer',
  title: 'Footer',
  component: Footer,
  initialProps: {
    linkRenderer: dummyLinkRenderer
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
