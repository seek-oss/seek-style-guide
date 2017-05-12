import SlideToggle from './SlideToggle';

export default {
  route: '/slide-toggle',
  title: 'SlideToggle',
  component: SlideToggle,
  initialProps: {
    onToggle: () => {
      console.log('I have been toggled');
    },
    id: 'myToggle',
    label: {
      position: 'right',
      text: 'Toggle me'
    }
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
            label: {
              ...props.label,
              hidden: true
            }
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
            label: {
              ...props.label,
              position: 'right'
            }
          })
        },
        {
          label: 'Left',
          transformProps: props => ({
            ...props,
            label: {
              ...props.label,
              position: 'left'
            }
          })
        }
      ]
    }
  ]
};
