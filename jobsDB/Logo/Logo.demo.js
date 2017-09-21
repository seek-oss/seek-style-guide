import Logo from './Logo';

export default {
  route: '/logo',
  tenantPath: 'jobsDB',
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
        }
      ]
    }
  ]
};
