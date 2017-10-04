import React from 'react';
import PropTypes from 'prop-types';
import { JobCard, PageBlock } from 'seek-style-guide/react';

const JobCardContainer = ({ component: DemoComponent, componentProps }) => {
  return (
    <PageBlock style={{ width: '75%' }}>
      <DemoComponent {...componentProps} />
    </PageBlock>
  );
};

JobCardContainer.propTypes = {
  component: PropTypes.element,
  componentProps: PropTypes.object
};

export default {
  route: '/jobCard',
  title: 'Job Card',
  component: JobCard,
  container: JobCardContainer,
  initialProps: {
    job: {
      company: 'SEEK Asia',
      jobTitle: 'Developer',
      jobUrl: 'https:\/\/www.jobstreet.com.my',
      location: 'Kuala Lumpur',
      description: 'Responsibilities :Responsible for Client Relationship Management and Worker Performance Management. Responsible for full spectrum of human resource and admin function, include...',
      companyLogoUrl: 'https://siva.jsstatic.com/my/94463/images/logo/94463_logo_0_48885.png',
      salary: 'RM99999 - RM999999',
      postingDuration: '1h'
    }
  },
  options: [
  {
    label: 'States',
    type: 'checklist',
    states: [
      {
        label: 'Company Confidential',
        transformProps: ({ className, ...props }) => ({
          ...props,
          job: {
            ...props.job,
            company: ''
          }
        })
      },
      {
        label: 'Classified',
        transformProps: ({ className, ...props }) => ({
          ...props,
          job: {
            ...props.job,
            classified: true
          }
        })
      },
      {
        label: 'No Logo',
        transformProps: props => ({
          ...props,
          job: {
            ...props.job,
            companyLogoUrl: ''
          }
        })
      },
      {
        label: 'Selling Points',
        transformProps: ({ className, ...props }) => ({
          ...props,
          job: {
            ...props.job,
            sellingPoints: [
              "HR Benefit",
              "Career Growth Opportunities",
              "Pleasant Work Environment"
            ],
          }
        })
      }
    ]
  }
  ]
};
