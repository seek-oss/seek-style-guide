import Footer from './Footer';

export default {
  route: '/jobsdb-footer',
  tenantPath: 'jobsDB',
  title: 'JobsDB Footer',
  component: Footer,
  initialProps: {
    language: 'en',
    country: 'hk',   
    domainUrl: 'jobsdb.com',
    mbaseUrl:'https://m.jobsdb.com', 
    contentUrl: "https://content.jobsdbcdn.com/Content/d0416"
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
            language: 'en',   
            domainUrl: 'jobsdb.com'
          })
        },
        {
          label: 'Bahasa',
          transformProps: props => ({
            ...props,
            language: 'id',   
            domainUrl: 'jobsdb.com'
          })
        },
        {
          label: 'Thai',
          transformProps: props => ({
            ...props,
            language: 'th',   
            domainUrl: 'jobsdb.com'
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
            country: 'hk',   
            domainUrl: 'jobsdb.com'

          })
        },
        {
          label: 'Singapore',
          transformProps: props => ({
            ...props,
            country: 'sg',   
            domainUrl: 'jobsdb.com'
          })
        },
        {
          label: 'Indonesia',
          transformProps: props => ({
            ...props,
            country: 'id',   
            domainUrl: 'jobsdb.com'
          })
        },
        {
          label: 'Thailand',
          transformProps: props => ({
            ...props,
            country: 'th',   
            domainUrl: 'jobsdb.com'
          })
        }
      ]
    }
  ]
};
