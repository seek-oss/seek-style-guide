import Text from './Text';
import * as sketch from './Text.sketch';

export default {
  route: '/text',
  title: 'Text',
  component: Text,
  sketch,
  initialProps: {
    children: 'Living Style Guide',
    hero: true
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Strong',
          transformProps: props => ({
            ...props,
            strong: true
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
          label: 'Hero',
          transformProps: props => props
        },
        {
          label: 'Headline',
          transformProps: ({ hero, ...props }) => ({
            ...props,
            headline: true
          })
        },
        {
          label: 'Heading',
          transformProps: ({ hero, ...props }) => ({
            ...props,
            heading: true
          })
        },
        {
          label: 'Subheading',
          transformProps: ({ hero, ...props }) => ({
            ...props,
            subheading: true
          })
        },
        {
          label: 'Superstandard',
          transformProps: ({ hero, ...props }) => ({
            ...props,
            superstandard: true
          })
        },
        {
          label: 'Standard',
          transformProps: ({ hero, ...props }) => props
        },
        {
          label: 'Substandard',
          transformProps: ({ hero, ...props }) => ({
            ...props,
            substandard: true
          })
        }
      ]
    }
  ]
};
