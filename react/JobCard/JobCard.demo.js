import React from 'react';
import PropTypes from 'prop-types';
import { JobCard, PageBlock, Constants } from 'seek-asia-style-guide/react';

const { JOBADTYPE_JOBSDB_DEFAULT, JOBADTYPE_JOBSDB_BRANDED, JOBADTYPE_JOBSTREET_DEFAULT, JOBADTYPE_JOBSTREET_STANDOUT } = Constants;

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
      company: {
        name: 'SEEK Asia',
        link: '/jobCard'
      },
      jobTitle: 'Senior Software Engineer (6 months Contract)',
      jobUrl: 'https://www.jobstreet.com.my/en/job/senior-software-engineer-3565614?fr=21',
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
      companyPictureUrl: 'https://siva.jsstatic.com/my/94463/images/photo/94463_photo_0_621506.jpg',
      postingDuration: '1 hour ago',
      salary: 'RM99999 - RM999999',
      sellingPoints: [
        'We practice a vibrant & energetic office culture',
        'Our company supports a fun yet balanced working environment',
        'We support a safe environment for our employees'
      ]
    },
    jobAdType: JOBADTYPE_JOBSDB_DEFAULT
  },
  options: [
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
              featuredLabel: 'Featured'
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
              confidentialLabel: 'Company Confidential'
            }
          })
        },
        {
          label: 'Classified',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
              classifiedLabel: 'Classified'
            }
          })
        },
        {
          label: 'No Salary',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
              salary: null
            }
          })
        },
        {
          label: 'Highlight Keyword',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job
            },
            keyword: 'seek senior engineer'
          })
        },
        {
          label: 'Shelf links',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
              shelf: {
                ...props.job.shelf,
                shelfLinks: [
                  {
                    label: 'Job function',
                    child: [
                      {
                        name: 'Accountant',
                        link: '#'
                      },
                      {
                        name: 'Accounting Clerk / Supervisor',
                        link: '#'
                      },
                      {
                        name: 'Financial Analyst',
                        link: '#'
                      }
                    ]
                  },
                  {
                    label: 'Industry',
                    child: [
                      {
                        name: 'Accounting / Audit / Tax Services',
                        link: '#'
                      }
                    ]
                  }
                ]
              }
            }
          })
        },
        {
          label: 'Tag links',
          transformProps: ({ className, ...props }) => ({
            ...props,
            job: {
              ...props.job,
              shelf: {
                ...props.job.shelf,
                tagLinks: [
                  {
                    name: 'keyword 1',
                    link: '#'
                  },
                  {
                    name: 'keyword 2',
                    link: '#'
                  }
                ]
              }
            }
          })
        }
      ]
    },
    {
      label: 'JobAd Type',
      type: 'radio',
      states: [
        {
          label: 'jobsDB standard',
          transformProps: props => ({
            ...props,
            jobAdType: JOBADTYPE_JOBSDB_DEFAULT
          })
        },
        {
          label: 'jobsDB Branded',
          transformProps: props => ({
            ...props,
            jobAdType: JOBADTYPE_JOBSDB_BRANDED
          })
        },
        {
          label: 'jobStreet Default',
          transformProps: props => ({
            ...props,
            jobAdType: JOBADTYPE_JOBSTREET_DEFAULT
          })
        },
        {
          label: 'jobStreet Standout',
          transformProps: props => ({
            ...props,
            jobAdType: JOBADTYPE_JOBSTREET_STANDOUT
          })
        }
      ]
    },
    {
      label: 'Company Pic',
      type: 'radio',
      states: [
        {
          label: 'Normal',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyPictureUrl: 'https://siva.jsstatic.com/my/94463/images/photo/94463_photo_0_621506.jpg'
            }
          })
        },
        {
          label: 'Very long',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyPictureUrl: 'https://siva.jsstatic.com/my/56932/images/photo/56932_photo_0_213672.jpg'
            }
          })
        },
        {
          label: 'Vertical',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyPictureUrl: 'https://siva.jsstatic.com/my/86688/images/photo/86688_photo_0_400935.jpg'
            }
          })
        },
        {
          label: 'Square',
          transformProps: props => ({
            ...props,
            job: {
              ...props.job,
              companyPictureUrl: 'https://siva.jsstatic.com/my/119697/images/photo/119697_photo_0_738574.jpg'
            }
          })
        }
      ]
    }
  ]
};
