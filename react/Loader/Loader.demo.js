import Loader from './Loader';

export default {
  route: '/loader',
  title: 'Loader',
  component: Loader,
  initialProps: {},
  options: [
    {
      label: 'Size',
      type: 'radio',
      states: [
        {
          label: 'Default'
        },
        {
          label: 'Small',
          transformProps: props => ({
            ...props,
            small: true
          })
        },
        {
          label: 'Extra small',
          transformProps: props => ({
            ...props,
            xsmall: true
          })
        }
      ]
    },
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Inline',
          transformProps: ({ className, ...props }) => ({
            ...props,
            inline: true
          })
        }
      ]
    }
  ]
};
