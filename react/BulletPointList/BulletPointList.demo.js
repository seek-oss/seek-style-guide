import React from 'react';
import { BulletPointList, Text } from 'seek-style-guide/react';
import * as sketch from './BulletPointList.sketch';

export default {
  route: '/bullet-point-list',
  title: 'Bullet Point List',
  category: 'Typography',
  component: BulletPointList,
  sketch,
  initialProps: {
    children: [
      /* eslint-disable react/jsx-key */
      <Text>Bullet point 1</Text>,
      <Text>Bullet point 2</Text>,
      <Text>Bullet point 3</Text>
    ]
  },
  options: []
};
