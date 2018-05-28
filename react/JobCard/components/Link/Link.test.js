import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

describe('JobCard - Link', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Link link={'/JobCard'} >link</Link>);
    expect(wrapper).toMatchSnapshot();
  });
});
