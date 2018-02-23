import React from 'react';
import Hidden from './Hidden';
import Text from '../Text/Text';

export default {
  route: '/hidden',
  title: 'Hidden',
  category: 'Layout',
  component: Hidden,
  initialProps: {
    children: <Text strong>This content may or may not be hidden.</Text>
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Mobile',
          transformProps: props => ({
            ...props,
            mobile: true
          })
        },
        {
          label: 'Desktop',
          transformProps: props => ({
            ...props,
            desktop: true
          })
        },
        {
          label: 'Print',
          transformProps: props => ({
            ...props,
            print: true
          })
        }
      ]
    }
  ]
};
