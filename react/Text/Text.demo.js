import Text from './Text';
import * as sketch from './Text.sketch';

export default {
  route: '/text',
  title: 'Text',
  category: 'Typography',
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
          label: 'Highlight',
          transformProps: props => ({
            ...props,
            highlight: true
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
        },
        {
          label: 'Info',
          transformProps: props => ({
            ...props,
            info: true
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
          label: 'Large',
          transformProps: ({ hero, ...props }) => ({
            ...props,
            large: true
          })
        },
        {
          label: 'Standard',
          transformProps: ({ hero, ...props }) => props
        },
        {
          label: 'Small',
          transformProps: ({ hero, ...props }) => ({
            ...props,
            small: true
          })
        }
      ]
    }
  ]
};
