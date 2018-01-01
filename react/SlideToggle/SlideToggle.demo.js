import SlideToggle from './SlideToggle';
import * as sketch from './SlideToggle.sketch';

export default {
  route: '/slidetoggle',
  title: 'Slide Toggle',
  component: SlideToggle,
  sketch,
  initialProps: {
    onChange: () => {},
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
