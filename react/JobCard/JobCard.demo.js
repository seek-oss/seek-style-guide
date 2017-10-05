import React from 'react';
import PropTypes from 'prop-types';
import { JobCard, PageBlock } from 'seek-style-guide/react';

const JobCardContainer = ({ component: DemoComponent, componentProps }) => {
  return (
    <PageBlock style={{ width: '100%' }}>
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
      company: 'SEEK Asia SEEK Asia SEEK Asia SEEK Asia SEEK Asia',
      jobTitle: 'Senior Software Engineer (6 months Contract)',
      jobUrl: 'https://www-dev.jobstreet.com.my/en/job/20171002-3-senior-front-end-developer-update-x-2-6100835/origin/dev/sources/3?fr=J',
      location: 'Kuala Lumpur',
      description: 'Responsibilities :Responsible for Client Relationship Management and Worker Performance Management. Responsible for full spectrum of human resource and admin function, include...',
      companyLogoUrl: 'https://siva.jsstatic.com/my/94463/images/logo/94463_logo_0_48885.png',
      salary: 'RM99999 - RM999999',
      postingDuration: '1 hour ago'
    }
  },
  options: [{
    label: 'Description',
    type: 'radio',
    states: [{
      label: 'Description present',
      transformProps: ({ ...props }) => ({
        ...props,
        job: {
          ...props.job,
          description: 'Responsibilities :Responsible for Client Relationship Management and Worker Performance Management. Responsible for full spectrum of human resource and admin function, include...'
        }
      })
    }, {
      label: 'No Description',
      transformProps: ({ ...props }) => ({
        ...props,
        job: {
          ...props.job,
          description: null
        }
      })
    }]
  },
  {
    label: 'States',
    type: 'checklist',
    states: [
      {
        label: 'Featured',
        transformProps: ({ className, ...props }) => ({
          ...props,
          job: {
            ...props.job,
            pinkLabel: 'Featured'
          }
        })
      },
      {
        label: 'Company Confidential',
        transformProps: ({ className, ...props }) => ({
          ...props,
          job: {
            ...props.job,
            company: '',
            greyLabel: 'Company Confidential'
          }
        })
      },
      {
        label: 'Classified',
        transformProps: ({ className, ...props }) => ({
          ...props,
          job: {
            ...props.job,
            greyLabel: 'Classified'
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
              'We practice a vibrant & energetic office culture',
              'Our company supports a fun yet balanced working environment',
              'We support a safe environment for our employees'
            ],
          }
        })
      }
    ]
  }
  ]
};
