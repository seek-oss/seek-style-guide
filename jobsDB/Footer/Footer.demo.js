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
      label: 'Country & Language',
      type: 'radio',
      states: [
        {
          label: 'Hong Kong (English)',
          transformProps: props => ({
            ...props,
            country: 'hk',   
            language: 'en', 
            domainUrl: 'jobsdb.com',
            mbaseUrl:'https://m.jobsdb.com'

          })
        },
        {
          label: 'Singapore (English)',
          transformProps: props => ({
            ...props,
            country: 'sg',   
            language: 'en',
            domainUrl: 'jobsdb.com',
            mbaseUrl:'https://m.jobsdb.com'
          })
        },
        {
          label: 'Indonesia (English)',
          transformProps: props => ({
            ...props,
            country: 'id',  
            language: 'en', 
            domainUrl: 'jobsdb.com',
            mbaseUrl:'https://m.jobsdb.co.id'
          })
        },
        {
          label: 'Indonesia (Bahasa)',
          transformProps: props => ({
            ...props,
            country: 'id',  
            language: 'id', 
            domainUrl: 'jobsdb.com',
            mbaseUrl:'https://m.jobsdb.co.id'
          })
        },
        {
          label: 'Thailand (English)',
          transformProps: props => ({
            ...props,
            country: 'th', 
            language: 'en',  
            domainUrl: 'jobsdb.com',
            mbaseUrl:'https://m.jobsdb.co.th'
          })
        },
        {
          label: 'Thailand (Thai)',
          transformProps: props => ({
            ...props,
            country: 'th', 
            language: 'th',  
            domainUrl: 'jobsdb.com',
            mbaseUrl:'https://m.jobsdb.co.th'
          })
        }
      ]
    }
  ]
};
