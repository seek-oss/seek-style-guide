import React from 'react';
import { shallow } from 'enzyme';

import JobCardLoader from './JobCardLoader';

describe('JobCardLoader', () => {
  it('should render with defaults', () => {
    expect(shallow(<JobCardLoader />)).toMatchSnapshot();
  });
});
