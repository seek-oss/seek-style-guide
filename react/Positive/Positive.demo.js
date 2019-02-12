import React from 'react';
import Positive from './Positive';
import Text from '../Text/Text';

export default {
  route: '/positive',
  title: 'Positive',
  category: 'Typography',
  component: Text,
  initialProps: {
    headline: true,
    children: ['This text is ', <Positive key="positive">positive</Positive>]
  },
  options: []
};
