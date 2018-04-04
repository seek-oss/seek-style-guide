import React from 'react';
import { shallow } from 'enzyme';

import ActionTray from './ActionTray';
import { Constants } from 'seek-asia-style-guide/react';

const { ACTIVE_TAB_HOME, ACTIVE_TAB_SEARCH, ACTIVE_TAB_SAVED_JOBS } = Constants;

describe('ActionTray', () => {
  const defaultProps = {
    handleToggleMenu: jest.fn(),
    brandStyles: {
      activeActionTrayIcon: 'activeActionTrayIcon'
    },
    messages: {
      'header.homeUrl': 'header.homeUrl',
      'header.searchUrl': 'header.searchUrl',
      'header.savedJobsUrl': 'header.savedJobsUrl'
    }
  };

  it('should render with default props', () => {
    const wrapper = shallow(<ActionTray {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with login available', () => {
    const testProps = {
      ...defaultProps,
      loginAvailable: true
    };
    const wrapper = shallow(<ActionTray {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with home tab active', () => {
    const testProps = {
      ...defaultProps,
      activeTab: ACTIVE_TAB_HOME
    };
    const wrapper = shallow(<ActionTray {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with search tab active', () => {
    const testProps = {
      ...defaultProps,
      activeTab: ACTIVE_TAB_SEARCH
    };
    const wrapper = shallow(<ActionTray {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with saved jobs tab active', () => {
    const testProps = {
      ...defaultProps,
      loginAvailable: true,
      activeTab: ACTIVE_TAB_SAVED_JOBS
    };
    const wrapper = shallow(<ActionTray {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with menu open', () => {
    const testProps = {
      ...defaultProps,
      activeTab: ACTIVE_TAB_HOME,
      menuOpen: true
    };
    const wrapper = shallow(<ActionTray {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render tray if showTray prop is explicitly false', () => {
    const testProps = {
      ...defaultProps,
      showTray: false
    };
    const wrapper = shallow(<ActionTray {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render home link if showHome prop is explicitly false', () => {
    const testProps = {
      ...defaultProps,
      showHome: false
    };
    const wrapper = shallow(<ActionTray {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render search link if showSearch prop is explicitly false', () => {
    const testProps = {
      ...defaultProps,
      showSearch: false
    };
    const wrapper = shallow(<ActionTray {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render saved jobs link if showSavedJobs prop is explicitly false', () => {
    const testProps = {
      ...defaultProps,
      showSavedJobs: false
    };
    const wrapper = shallow(<ActionTray {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render menu button if showMenu prop is explicitly false', () => {
    const testProps = {
      ...defaultProps,
      showMenu: false
    };
    const wrapper = shallow(<ActionTray {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
