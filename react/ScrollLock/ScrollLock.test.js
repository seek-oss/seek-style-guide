import { shallow } from 'enzyme';
import React from 'react';

import ScrollLock from './ScrollLock';

describe('ScrollLock', () => {
  it('should render without props', () => {
    const wrapper = shallow(<ScrollLock />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with children', () => {
    const wrapper = shallow(<ScrollLock children={<p>Children</p>} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with body lock', () => {
    const wrapper = shallow(<ScrollLock children="Children" shouldLockBody />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not touch-scroll within children', () => {
    const wrapper = shallow(<ScrollLock children="Children" shouldLockBody shouldScrollInside={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
