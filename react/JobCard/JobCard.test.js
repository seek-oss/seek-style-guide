import React from 'react';
import { shallow } from 'enzyme';

import JobCard from './JobCard';
import { Constants } from 'seek-asia-style-guide/react';

const { JOBADTYPE_JOBSDB_DEFAULT, JOBADTYPE_JOBSTREET_STANDOUT } = Constants;

const defaultJob = {
  company: {
    name: 'SEEK Asia',
    link: '/jobCard'
  },
  jobTitle: 'Senior Software Engineer (6 months Contract)',
  jobUrl: 'https://www-dev.jobstreet.com.my/en/job/20171002-3-senior-front-end-developer-update-x-2-6100835/origin/dev/sources/3?fr=J',
  locations: [
    {
      name: 'Pahang',
      link: '/jobCard'
    },
    {
      name: 'Selangor',
      link: '/jobCard',
      child: {
        name: 'Cheras',
        link: '/jobCard',
        child: {
          name: 'Near Leisure Mall'
        }
      }
    }
  ],
  description: 'Responsibilities :Responsible for Client Relationship Management and Worker Performance Management. Responsible for full spectrum of human resource and admin function, include...',
  companyLogoUrl: 'https://siva.jsstatic.com/my/94463/images/logo/94463_logo_0_48885.png',
  postingDuration: '1 hour ago',
  salary: 'RM99999 - RM999999',
  shelf: {
    shelfLinks: [
      {
        label: 'Job function',
        child: [{
          name: 'Accountant',
          link: '/jobCard'
        }]
      },
      {
        label: 'Industry',
        child: [{
          name: 'Accounting / Audit / Tax Services',
          link: '/jobCard'
        }]
      }
    ]
  }
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
  it('should render job title with bold keyword', () => {
    const descriptionJob = {
      ...defaultJob
    };
    const keyword = 'Seek Senior Engineer';
    const wrapper = shallow(<JobCard job={descriptionJob} keyword={keyword} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render company with bold keyword', () => {
    const descriptionJob = {
      ...defaultJob
    };
    const keyword = 'Seek';
    const wrapper = shallow(<JobCard job={descriptionJob} keyword={keyword} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render jobsDB default style', () => {
    const descriptionJob = {
      ...defaultJob
    };
    const keyword = 'Seek';
    const wrapper = shallow(<JobCard job={descriptionJob} keyword={keyword} jobAdType={JOBADTYPE_JOBSDB_DEFAULT} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render jobStreet standout style', () => {
    const descriptionJob = {
      ...defaultJob
    };
    const keyword = 'Seek';
    const wrapper = shallow(<JobCard job={descriptionJob} keyword={keyword} jobAdType={JOBADTYPE_JOBSTREET_STANDOUT} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render plain company label', () => {
    const descriptionJob = {
      ...defaultJob,
      company: {
        name: 'Seek Asia'
      }
    };
    const wrapper = shallow(<JobCard job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render tag links', () => {
    const descriptionJob = {
      ...defaultJob,
      shelf: {
        ...defaultJob.shelf,
        tagLinks: [
          {
            child: 'keyword 1',
            link: '/jobCard'
          },
          {
            child: 'keyword 2',
            link: '/jobCard'
          }
        ]
      }
    };
    const wrapper = shallow(<JobCard job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render shelf section', () => {
    const descriptionJob = {
      ...defaultJob,
      shelf: null
    };
    const wrapper = shallow(<JobCard job={descriptionJob} />);
    expect(wrapper).toMatchSnapshot();
  });
});
