import React from 'react';
import Strong from './Strong';
import Text from '../Text/Text';

export default {
  route: '/strong',
  title: 'Strong',
  category: 'Typography',
  component: Text,
  initialProps: {
    headline: true,
    regular: true,
    children: ['This text is ', <Strong key="strong">strong</Strong>]
  },
  options: []
};
