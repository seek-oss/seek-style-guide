import React from 'react';
import Highlight from './Highlight';
import Text from '../Text/Text';
import { TONE } from '../Section/Section';
const NEUTRAL = 'neutral';

const renderChildren = props => ([
  'This text is ',
  <Highlight key="highlight" {...props}>highlighted</Highlight>
]);

export default {
  route: '/highlight',
  title: 'Highlight',
  category: 'Typography',
  component: Text,
  initialProps: {
    headline: true,
    children: renderChildren({ tone: NEUTRAL })
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Secondary',
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
          label: 'Neutral',
          transformProps: props => ({
            ...props,
            children: renderChildren({
              secondary: props.secondary,
              tone: NEUTRAL
            })
          })
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
        },
        {
          label: 'Positive',
          transformProps: props => ({
            ...props,
            children: renderChildren({
              secondary: props.secondary,
              tone: TONE.POSITIVE
            })
          })
        },
        {
          label: 'Info',
          transformProps: props => ({
            ...props,
            children: renderChildren({
              secondary: props.secondary,
              tone: TONE.INFO
            })
          })
        }
      ]
    }
  ]
};
