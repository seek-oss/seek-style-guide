import React from 'react';
import Critical from './Critical';
import Text from '../Text/Text';

export default {
  route: '/critical',
  title: 'Critical',
  category: 'Typography',
  component: Text,
  initialProps: {
    headline: true,
    children: ['This text is ', <Critical key="critical">critical</Critical>]
  },
  options: []
};
