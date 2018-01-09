import Logo from './Logo';

export default {
  route: '/jobstreet-logo',
  tenantPath: 'jobStreet',
  title: 'JobStreet Logo',
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
