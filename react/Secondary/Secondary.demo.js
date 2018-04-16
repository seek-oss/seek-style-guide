import React from 'react';
import Secondary from './Secondary';
import Text from '../Text/Text';

export default {
  route: '/secondary',
  title: 'Secondary',
  category: 'Typography',
  component: Text,
  initialProps: {
    headline: true,
    children: [
      'This text is ',
      <Secondary key="secondary">secondary</Secondary>
    ]
  },
  options: []
};
