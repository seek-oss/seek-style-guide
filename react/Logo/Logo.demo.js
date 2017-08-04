import Logo from './Logo';

export default {
  route: '/logo',
  title: 'Logo',
  component: Logo,
  initialProps: {},
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Invert',
          transformProps: props => ({
            ...props,
            invert: true
          })
        },
        {
          label: 'Compact',
          transformProps: props => ({
            ...props,
            compact: true
          })
        }
      ]
    }
  ]
};
