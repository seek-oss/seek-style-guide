import { Header } from 'seek-asia-style-guide/jobStreet';
import { ACTIVE_TAB_HOME, ACTIVE_TAB_SEARCH, ACTIVE_TAB_SAVED_JOBS } from 'seek-asia-style-guide/react/Header/Header';

const ROUTE = '/jobstreet-header';

export default {
  route: ROUTE,
  tenantPath: 'jobStreet',
  title: 'JobStreet Header',
  component: Header,
  initialProps: {
    language: 'en',
    country: 'my',
    loginAvailable: true,
    activeTab: ACTIVE_TAB_HOME
  },
  options: [{
    label: 'States',
    type: 'checklist',
    states: [
      {
        label: 'Hide Tray',
        transformProps: props => ({
          ...props,
          actionTrayProps: {
            ...props.actionTrayProps,
            showTray: false
          }
        })
      }, {
        label: 'Hide Home',
        transformProps: props => ({
          ...props,
          actionTrayProps: {
            ...props.actionTrayProps,
            showHome: false
          }
        })
      }, {
        label: 'Hide Search',
        transformProps: props => ({
          ...props,
          actionTrayProps: {
            ...props.actionTrayProps,
            showSearch: false
          }
        })
      }, {
        label: 'Hide Saved Jobs',
        transformProps: props => ({
          ...props,
          actionTrayProps: {
            ...props.actionTrayProps,
            showSavedJobs: false
          }
        })
      }, {
        label: 'Hide Menu',
        transformProps: props => ({
          ...props,
          actionTrayProps: {
            ...props.actionTrayProps,
            showMenu: false
          }
        })
      }
    ]
  }, {
    label: 'Locale',
    type: 'radio',
    states: [
      {
        label: 'Malaysia (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'my'
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
        label: 'Phillipines (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'ph'
        })
      },
      {
        label: 'Vietnam (Vietnamese)',
        transformProps: props => ({
          ...props,
          language: 'vi',
          country: 'vn'
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
