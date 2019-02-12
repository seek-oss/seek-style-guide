import React from 'react';
import ScreenReaderOnly from './ScreenReaderOnly';
import Text from '../Text/Text';

export default {
  route: '/screen-reader-only',
  title: 'Screen Reader Only',
  category: 'Layout',
  component: Text,
  initialProps: {
    style: { padding: '0 20px' },
    children: [
      'The next sentence can only be read by screen readers. ',
      <ScreenReaderOnly key="ScreenReaderOnly">
        This sentence can only be read by screen readers.
      </ScreenReaderOnly>
    ]
  },
  options: []
};
