import Text from './Text';
import * as sketch from './Text.sketch';

export default {
  route: '/text',
  title: 'Text',
  component: Text,
  sketch,
  initialProps: {
    children: 'Living Style Guide',
    screaming: true
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Bold',
          transformProps: props => ({
            ...props,
            strong: true
          })
        },
        {
          label: 'SemiBold',
          transformProps: props => ({
            ...props,
            semiStrong: true
          })
        },
        {
          label: 'Regular',
          transformProps: props => ({
            ...props,
            regular: true
          })
        },
        {
          label: 'Light',
          transformProps: props => ({
            ...props,
            light: true
          })
        },
        {
          label: 'Disable baseline',
          transformProps: props => ({
            ...props,
            baseline: false
          })
        }
      ]
    },
    {
      label: 'Tone',
      type: 'radio',
      states: [
        {
          label: 'Neutral tone',
          transformProps: props => props
        },
        {
          label: 'Positive',
          transformProps: props => ({
            ...props,
            positive: true
          })
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            critical: true
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            secondary: true
          })
        }
      ]
    },
    {
      label: 'Size',
      type: 'radio',
      states: [
        {
          label: 'Screaming',
          transformProps: props => props
        },
        {
          label: 'Yelling',
          transformProps: ({ screaming, ...props }) => ({
            ...props,
            yelling: true
          })
        },
        {
          label: 'Shouting',
          transformProps: ({ screaming, ...props }) => ({
            ...props,
            shouting: true
          })
        },
        {
          label: 'Waving',
          transformProps: ({ screaming, ...props }) => ({
            ...props,
            waving: true
          })
        },
        {
          label: 'Whistling',
          transformProps: ({ screaming, ...props }) => ({
            ...props,
            whistling: true
          })
        },
        {
          label: 'Whispering (Title)',
          transformProps: ({ screaming, ...props }) => ({
            ...props,
            whisperingTitle: true
          })
        },
        {
          label: 'Loud',
          transformProps: ({ screaming, ...props }) => ({
            ...props,
            loud: true
          })
        },
        {
          label: 'Conversational',
          transformProps: ({ screaming, ...props }) => props
        },
        {
          label: 'Intimate',
          transformProps: ({ screaming, ...props }) => ({
            ...props,
            intimate: true
          })
        },
        {
          label: 'Whispering',
          transformProps: ({ screaming, ...props }) => ({
            ...props,
            whispering: true
          })
        }
      ]
    }
  ]
};
