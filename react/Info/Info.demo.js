import React from 'react';
import Info from './Info';
import Text from '../Text/Text';

export default {
  route: '/info',
  title: 'Info',
  category: 'Typography',
  component: Text,
  initialProps: {
    headline: true,
    children: ['This text is ', <Info key="info">info</Info>]
  },
  options: []
};
