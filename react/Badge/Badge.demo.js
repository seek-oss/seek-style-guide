import { Badge } from 'seek-style-guide/react';

export default {
  route: '/badge',
  title: 'Badge',
  component: Badge,

  initialProps: {
    children: '13 new',
    info: true
  },
  options: [
    {
      label: 'Text',
      type: 'radio',
      states: [
        {
          label: 'Info',
          transformProps: props => ({
            ...props,
            info: true
          })
        },
        {
          label: 'Accent',
          transformProps: props => ({
            ...props,
            accent: true
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            secondary: true
          })
        },
        {
          label: 'Positive',
          transformProps: props => ({
            ...props,
            positive: true
          })
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            critical: true
          })
        }
      ]
    },
    {
      label: 'States',
      type: 'checkbox',
      states: [
        {
          label: 'Strong',
          transformProps: props => ({
            ...props,
            strong: true
          })
        }
      ]
    }
  ]
};
