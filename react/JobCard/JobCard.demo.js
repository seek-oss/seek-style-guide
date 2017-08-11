import React from 'react';
import { JobCard } from 'seek-style-guide/react';

export default {
    route: '/jobCard',
    title: 'Job Card',
    component: JobCard,
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
