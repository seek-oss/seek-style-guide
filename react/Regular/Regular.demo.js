import React from 'react';
import Regular from './Regular';
import Text from '../Text/Text';

export default {
  route: '/regular',
  title: 'Regular',
  category: 'Typography',
  component: Text,
  initialProps: {
    headline: true,
    children: ['This text is ', <Regular key="regular">regular</Regular>]
  },
  options: []
};
