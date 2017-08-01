import { shallow } from 'enzyme';
import React from 'react';

import DisableScrollOutside from './DisableScrollOutside';

describe('DisableScrollOutside', () => {
  it('should render without props', () => {
    const wrapper = shallow(<DisableScrollOutside />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with children', () => {
    const wrapper = shallow(<DisableScrollOutside children={<p>Children</p>} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with body lock', () => {
    const wrapper = shallow(<DisableScrollOutside children="Children" shouldLockBody />);
    expect(wrapper).toMatchSnapshot();
  });
});
