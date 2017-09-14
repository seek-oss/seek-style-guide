import Footer from './Footer';

export default {
  route: '/footer',
  title: 'JobStreet Footer',
  component: Footer,
  initialProps: {
    language: 'en',
    country: 'my'
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
          label: 'Vietnamese',
          transformProps: props => ({
            ...props,
            language: 'vi'
          })
        }
      ]
    },
    {
      label: 'Country',
      type: 'radio',
      states: [
        {
          label: 'Malaysia',
          transformProps: props => ({
            ...props,
            country: 'my'
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
          label: 'Phillipines',
          transformProps: props => ({
            ...props,
            country: 'ph'
          })
        },
        {
          label: 'Vietnam',
          transformProps: props => ({
            ...props,
            country: 'vn'
          })
        }
      ]
    }
  ]
};
