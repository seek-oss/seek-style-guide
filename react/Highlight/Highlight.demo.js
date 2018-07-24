import React from 'react';
import Highlight from './Highlight';
import Text from '../Text/Text';

export default {
  route: '/highlight',
  title: 'Highlight',
  category: 'Typography',
  component: Text,
  initialProps: {
    headline: true,
    children: [
      'This text is ',
      <Highlight key="highlight">highlighted</Highlight>
    ]
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            secondary: true,
            children: [
              'This text is ',
              <Highlight key="highlight" secondary>highlighted</Highlight>
            ]
          })
        }
      ]
    }
  ]
};
