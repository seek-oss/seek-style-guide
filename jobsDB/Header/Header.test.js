import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('JobsDB Header', () => {
  const defaultProps = {
    country: 'hk',
    language: 'en',
    activeTab: 'ACTIVE_TAB_HOME'
  };

  it('renders with default props', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
