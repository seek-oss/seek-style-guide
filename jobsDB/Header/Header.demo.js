import { Header } from 'seek-asia-style-guide/jobsDB';
import { ACTIVE_TAB_HOME, ACTIVE_TAB_SEARCH, ACTIVE_TAB_SAVED_JOBS } from 'seek-asia-style-guide/react/Header/Header';

const ROUTE = '/jobsdb-header';

export default {
  route: ROUTE,
  tenantPath: 'jobsDB',
  title: 'JobsDB Header',
  component: Header,
  initialProps: {
    language: 'en',
    country: 'hk',
    loginAvailable: true,
    activeTab: ACTIVE_TAB_HOME
  },
  options: [{
    label: 'Locale',
    type: 'radio',
    states: [
      {
        label: 'Hong Kong (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'hk'
        })
      },
      {
        label: 'Indonesia (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'id'
        })
      },
      {
        label: 'Indonesia (Bahasa)',
        transformProps: props => ({
          ...props,
          language: 'id',
          country: 'id'
        })
      },
      {
        label: 'Singapore (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'sg'
        })
      },
      {
        label: 'Thailand (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'th'
        })
      },
      {
        label: 'Thailand (Thai)',
        transformProps: props => ({
          ...props,
          language: 'th',
          country: 'th'
        })
      }
    ]
  }, {
    label: 'Login Available',
    type: 'radio',
    states: [
      {
        label: 'Login available',
        transformProps: props => ({
          ...props,
          loginAvailable: true
        })
      },
      {
        label: 'Login unavailable',
        transformProps: props => ({
          ...props,
          loginAvailable: false
        })
      }
    ]
  }, {
    label: 'Active tab',
    type: 'radio',
    states: [
      {
        label: 'Home',
        transformProps: props => ({
          ...props,
          activeTab: ACTIVE_TAB_HOME
        })
      },
      {
        label: 'Search',
        transformProps: props => ({
          ...props,
          activeTab: ACTIVE_TAB_SEARCH
        })
      },
      {
        label: 'Saved Jobs',
        transformProps: props => ({
          ...props,
          activeTab: ACTIVE_TAB_SAVED_JOBS
        })
      }
    ]
  }]
};
