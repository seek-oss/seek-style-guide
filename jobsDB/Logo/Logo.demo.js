import Logo from './Logo';

export default {
  route: '/jobsdb-logo',
  tenantPath: 'jobsDB',
  title: 'JobsDB Logo',
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
