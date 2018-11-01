import React from 'react';
import Highlight from './Highlight';
import Text from '../Text/Text';
import { TONE } from '../private/tone';

const renderChildren = props => [
  'This text is ',
  <Highlight key="highlight" {...props}>
    highlighted
  </Highlight>
];

export default {
  route: '/highlight',
  title: 'Highlight',
  category: 'Typography',
  component: Text,
  initialProps: {
    headline: true,
    children: renderChildren({})
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Secondary text',
          transformProps: props => ({
            ...props,
            secondary: true,
            children: renderChildren({ secondary: true })
          })
        }
      ]
    },
    {
      label: 'Tone',
      type: 'radio',
      states: [
        {
          label: 'Select tone...'
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            children: renderChildren({
              secondary: props.secondary,
              tone: TONE.CRITICAL
            })
          })
        }
      ]
    }
  ]
};
