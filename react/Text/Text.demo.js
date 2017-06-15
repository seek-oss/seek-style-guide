import Text from './Text';

export default {
  route: '/typography',
  title: 'Typography',
  component: Text,
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
          label: 'Baseline False',
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
          transformProps: props => ({
            ...props,
            hero: false,
            headline: true
          })
        },
        {
          label: 'Heading',
          transformProps: props => ({
            ...props,
            hero: false,
            heading: true
          })
        },
        {
          label: 'Subheading',
          transformProps: props => ({
            ...props,
            hero: false,
            subheading: true
          })
        },
        {
          label: 'Standard',
          transformProps: props => ({
            ...props,
            hero: false
          })
        }
      ]
    }
  ]
};
