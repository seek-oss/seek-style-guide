import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import localization from '../../../localization';
import links from '../../links';

describe('JobStreet navigation component', () => {
  it('should render supplied messages', () => {
    expect(shallow(
      <Nav links={links.getNavLinks()} messages={localization['en-my']} />
    )).toMatchSnapshot();
  });

  it('should render supplied messages on the right', () => {
    expect(shallow(
      <Nav links={links.getUserLinks()} messages={localization['en-my']} isRightAligned />
    )).toMatchSnapshot();
  });
});
