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
      location: 'Kuala Lumpur',
      description: 'Responsibilities :Responsible for Client Relationship Management and Worker Performance Management. Responsible for full spectrum of human resource and admin function, include...',
      companyLogoUrl: 'https://siva.jsstatic.com/my/94463/images/logo/94463_logo_0_48885.png',
      salary: 'RM99999 - RM999999',
      postingDuration: '1h'
    }
  },
  options: [{
    label: 'Description',
    type: 'radio',
    states: [{
      label: 'No Description',
      transformProps: ({ ...props }) => ({
        ...props,
        job: {
          ...props.job,
          description: null
        }
      })
    }, {
      label: 'Description present',
      transformProps: ({ ...props }) => ({
        ...props,
        job: {
          ...props.job,
          description: 'Responsibilities :Responsible for Client Relationship Management and Worker Performance Management. Responsible for full spectrum of human resource and admin function, include...'
        }
      })
    }]
  },
  {
    label: 'Company Logo',
    type: 'radio',
    states: [{
      label: 'No Logo',
      transformProps: ({ ...props }) => ({
        ...props,
        job: {
          ...props.job,
          companyLogoUrl: null
        }
      })
    }, {
      label: 'Logo present',
      transformProps: ({ ...props }) => ({
        ...props,
        job: {
          ...props.job,
          companyLogoUrl: 'https://siva.jsstatic.com/my/94463/images/logo/94463_logo_0_48885.png'
        }
      })
    }]
  }]
};
