import React from 'react';
import { shallow } from 'enzyme';

import JobCard from './JobCard';

const defaultJob = {
  company: 'SEEK Asia',
  jobTitle: 'Senior Software Engineer (6 months Contract)',
  jobUrl: 'https://www-dev.jobstreet.com.my/en/job/20171002-3-senior-front-end-developer-update-x-2-6100835/origin/dev/sources/3?fr=J',
  location: 'Kuala Lumpur',
  description: 'Responsibilities :Responsible for Client Relationship Management and Worker Performance Management. Responsible for full spectrum of human resource and admin function, include...',
  companyLogoUrl: 'https://siva.jsstatic.com/my/94463/images/logo/94463_logo_0_48885.png',
  postingDuration: '1 hour ago',
  salary: 'RM99999 - RM999999'
};

describe('JobCard', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<JobCard job={defaultJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with featured label', () => {
    const descriptionJob = {
      ...defaultJob,
      featuredLabel: 'Feature'
    };

    const wrapper = shallow(<JobCard job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with company confidential in grey label', () => {
    const descriptionJob = {
      ...defaultJob,
      confidentialLabel: 'Company Confidential',
      company: null
    };

    const wrapper = shallow(<JobCard job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with Classified in grey label', () => {
    const descriptionJob = {
      ...defaultJob,
      classifiedLabel: 'Classified'
    };

    const wrapper = shallow(<JobCard job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with selling points props', () => {
    const descriptionJob = {
      ...defaultJob,
      sellingPoints: [
        'We practice a vibrant & energetic office culture',
        'Our company supports a fun yet balanced working environment',
        'We support a safe environment for our employees'
      ]
    };

    const wrapper = shallow(<JobCard job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with bold keyword', () => {
    const descriptionJob = {
      ...defaultJob
    };
    const keyword = 'Senior Engineer';
    const wrapper = shallow(<JobCard job={descriptionJob} keyword={keyword} />);
    expect(wrapper).toMatchSnapshot();
  });
});
