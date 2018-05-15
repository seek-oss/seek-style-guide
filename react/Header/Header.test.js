import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  const FakeComponent = () => {
    return (<div>I'm an image of some kind</div>);
  };

  const defaultProps = {
    brandStyles: {
      primaryNavLink: 'primaryNavLink',
      employerLink: 'employerLink'
    },
    messages: {
      'header.employerSiteUrl': 'http://brand.seekasia.com',
      'header.employerSiteTitle': 'click here',
      'header.employerLinkPrefix': 'Awesome employers should '
    },
    locales: [{
      title: 'Hong Kong (English)',
      ItemIcon: FakeComponent,
      url: 'https://hk.jobsdb.com/hk',
      language: 'en',
      country: 'hk'
    }, {
      title: 'Indonesia (English)',
      ItemIcon: FakeComponent,
      url: 'https://id.jobsdb.com/id',
      language: 'en',
      country: 'id'
    }],
    LogoComponent: FakeComponent,
    country: 'hk',
    language: 'en'
  };

  const mockLinks = [
    { title: 'Home', url: 'http://seekasia.com/home', ItemIcon: FakeComponent },
    { title: 'MyPortal', url: 'http://seekasia.com/myPortal', ItemIcon: FakeComponent },
    { title: 'Resources', url: 'http://seekasia.com/resources', ItemIcon: FakeComponent },
    { title: 'CareerInsights', url: 'http://seekasia.com/career-insights', ItemIcon: FakeComponent }
  ];

  it('should render with default props', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with login available', () => {
    const testProps = {
      ...defaultProps,
      loginAvailable: true
    };
    const wrapper = shallow(<Header {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with links list', () => {
    const testProps = {
      ...defaultProps,
      links: mockLinks
    };
    const wrapper = shallow(<Header {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass through optional props', () => {
    const testProps = {
      ...defaultProps,
      links: mockLinks,
      activeTab: 'ACTIVE_TAB_HOME',
      logoProps: { country: 'my' },
      more: [{ title: 'Space Piracy Jobs', url: 'http://seekasia.com/space-piracy' }],
      actionTrayProps: {
        showMenu: false
      }
    };
    const wrapper = shallow(<Header {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
