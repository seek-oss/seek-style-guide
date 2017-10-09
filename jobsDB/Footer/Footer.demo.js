import Footer from './Footer';

export default {
  route: '/footer',
  tenantPath: 'jobsDB',
  title: 'Footer',
  component: Footer,
  initialProps: {
    language: 'en',
    country: 'hk'
  },
  options: [
    {
      label: 'Language',
      type: 'radio',
      states: [
        {
          label: 'English',
          transformProps: props => ({
            ...props,
            language: 'en'
          })
        },
        {
          label: 'Bahasa',
          transformProps: props => ({
            ...props,
            language: 'id'
          })
        },
        {
          label: 'Thai',
          transformProps: props => ({
            ...props,
            language: 'th'
          })
        }
      ]
    },
    {
      label: 'Country',
      type: 'radio',
      states: [
        {
          label: 'Hong Kong',
          transformProps: props => ({
            ...props,
            country: 'hk'
          })
        },
        {
          label: 'Singapore',
          transformProps: props => ({
            ...props,
            country: 'sg'
          })
        },
        {
          label: 'Indonesia',
          transformProps: props => ({
            ...props,
            country: 'id'
          })
        },
        {
          label: 'Thailand',
          transformProps: props => ({
            ...props,
            country: 'th'
          })
        }
      ]
    }
  ]
};
