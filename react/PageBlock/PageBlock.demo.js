import React from 'react';
import PageBlock from './PageBlock';
import Text from '../Text/Text';

export default {
  route: '/page-block',
  title: 'Page Block',
  category: 'Layout',
  component: PageBlock,
  block: true,
  initialProps: {
    style: { backgroundColor: 'pink' },
    children: (
      <div style={{ backgroundColor: 'blue', color: 'white' }}>
        <Text strong>This content is nested within a PageBlock component</Text>
      </div>
    )
  },
  options: []
};
