import React from 'react';
import { shallow } from 'enzyme';

import JobCard from './JobCard';

const defaultJob = {
  company: 'SEEK Asia',
  jobTitle: 'Developer',
  location: 'Kuala Lumpur',
  salary: 'RM999999999 - RM999999999999',
  postingDuration: '1 hour ago'
};

describe('JobCard', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<JobCard job={defaultJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with description props', () => {
    const descriptionJob = {
      ...defaultJob,
      description: 'Hello world'
    };

    const wrapper = shallow(<JobCard job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });
});
