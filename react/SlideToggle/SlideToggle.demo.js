import SlideToggle from './SlideToggle';

export default {
  route: '/slide-toggle',
  title: 'Slide toggle',
  component: SlideToggle,
  initialProps: {
    onToggle: () => {},
    id: 'myToggle',
    label: 'Toggle me'
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Checked',
          transformProps: ({ className, ...props }) => ({
            ...props,
            checked: true
          })
        },
        {
          label: 'Hide label',
          transformProps: ({ className, ...props }) => ({
            ...props,
            hideLabel: true
          })
        }
      ]
    },
    {
      label: 'Label position',
      type: 'radio',
      states: [
        {
          label: 'Right',
          transformProps: props => ({
            ...props,
            position: 'right'
          })
        },
        {
          label: 'Left',
          transformProps: props => ({
            ...props,
            position: 'left'
          })
        }
      ]
    }
  ]
};
