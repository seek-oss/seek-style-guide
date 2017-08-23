import React from 'react';
import { JobCard, PageBlock } from 'seek-style-guide/react';

const JobCardContainer = ({component: DemoComponent, componentProps: props}) => {
    return (
        <PageBlock style={{ width: '75%' }}>
            <DemoComponent {...props} />
        </PageBlock>
    )
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
            salary: 'RM999999999 - RM999999999999',
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
                    description: 'Hello world'
                }
            })
        }]
    }]
};
