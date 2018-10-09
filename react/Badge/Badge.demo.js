import { Badge } from 'seek-style-guide/react';

export default {
  route: '/badge',
  title: 'Badge',
  component: Badge,
  initialProps: {
    children: '13 new'
  },
  options: [
    {
      label: 'Tone',
      type: 'radio',
      states: [
        {
          label: '',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: 'Accent',
          transformProps: props => ({
            ...props,
            tone: 'accent'
          })
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            tone: 'critical'
          })
        },
        {
          label: 'Info',
          transformProps: props => ({
            ...props,
            tone: 'info'
          })
        },
        {
          label: 'Positive',
          transformProps: props => ({
            ...props,
            tone: 'positive'
          })
        },
        {
          label: 'Neutral',
          transformProps: props => ({
            ...props,
            tone: 'neutral'
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            tone: 'secondary'
          })
        }
      ]
    },
    {
      label: 'Levels',
      type: 'checkbox',
      states: [
        {
          label: 'Strong',
          transformProps: props => ({
            ...props,
            strong: true
          })
        }
      ]
    }
  ]
};
