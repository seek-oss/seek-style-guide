import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('JobStreet navigation component', () => {
  it('should render supplied messages', () => {
    const links = [
      {
        href: 'unitTest.testLink',
        title: 'unitTest.testTitle',
        text: 'unitTest.testText',
        childLinks: []
      },
      {
        href: 'unitTest.testLink1',
        title: 'unitTest.testTitle1',
        text: 'unitTest.testText1',
        childLinks: []
      }
    ];
    const localization = {
      'unitTest.testLink': 'https://store.steampowered.com/?',
      'unitTest.testTitle': 'Buy SFV from Steam',
      'unitTest.testText': 'Buy now!',
      'unitTest.testLink1': 'https://store.steampowered.com/?',
      'unitTest.testTitle1': 'Buy SFV Arcade from Steam',
      'unitTest.testText1': 'Pre-order now!'
    };
    expect(
      shallow(<Nav links={links} messages={localization} />)
    ).toMatchSnapshot();
  });

  it('should render active main nav correctly', () => {
    const links = [
      {
        href: 'unitTest.testLink',
        title: 'unitTest.testTitle',
        text: 'unitTest.testText',
        childLinks: []
      },
      {
        href: 'unitTest.testLink1',
        title: 'unitTest.testTitle1',
        text: 'unitTest.testText1',
        childLinks: []
      }
    ];
    const localization = {
      'unitTest.testLink': 'https://store.steampowered.com/?',
      'unitTest.testTitle': 'Buy SFV from Steam',
      'unitTest.testText': 'Buy now!',
      'unitTest.testLink1': 'https://store.steampowered.com/?',
      'unitTest.testTitle1': 'Buy SFV Arcade from Steam',
      'unitTest.testText1': 'Pre-order now!'
    };
    expect(
      shallow(
        <Nav
          links={links}
          messages={localization}
          activeNavLinkTextKey="unitTest.testText"
        />
      )
    ).toMatchSnapshot();
  });

  it('should render message with child links', () => {
    const links = [
      {
        href: 'unitTest.testLink',
        title: 'unitTest.testTitle',
        text: 'unitTest.testText',
        childLinks: []
      }
    ];
    const localization = {
      'unitTest.testLink': 'https://store.steampowered.com/?',
      'unitTest.testTitle': 'Buy SFV from Steam',
      'unitTest.testText': 'Buy now!'
    };
    expect(
      shallow(<Nav links={links} messages={localization} isRightAligned />)
    ).toMatchSnapshot();
  });

  it('should render message with URL parameters', () => {
    const links = [
      {
        href: 'unitTest.testLink',
        hrefParams: {
          sfvFavorite: 'karin'
        },
        title: 'unitTest.testTitle',
        text: 'unitTest.testText',
        childLinks: []
      }
    ];
    const localization = {
      'unitTest.testLink': 'https://store.steampowered.com/?',
      'unitTest.testTitle': 'Buy SFV from Steam',
      'unitTest.testText': 'Buy now!'
    };
    expect(
      shallow(<Nav links={links} messages={localization} />)
    ).toMatchSnapshot();
  });
});
