import { Alert } from 'seek-style-guide/react';
import { LEVEL, TYPE } from './Alert';

export default {
  route: '/alert',
  title: 'Alert',
  component: Alert,
  initialProps: {
    type: TYPE.POSITIVE,
    level: LEVEL.PRIMARY,
    message: 'Test message text lorem ipsum dolor set amet'
  },
  options: [{
    label: 'Type',
    type: 'radio',
    states: [
      {
        label: 'Positive',
        transformProps: props => ({
          ...props,
          type: TYPE.POSITIVE
        })
      },
      {
        label: 'Info',
        transformProps: props => ({
          ...props,
          type: TYPE.INFO
        })
      },
      {
        label: 'Critical',
        transformProps: props => ({
          ...props,
          type: TYPE.CRITICAL
        })
      },
      {
        label: 'Help',
        transformProps: props => ({
          ...props,
          type: TYPE.HELP
        })
      }
    ]
  }, {
    label: 'Level',
    type: 'radio',
    states: [
      {
        label: 'Primary',
        transformProps: props => ({
          ...props,
          level: LEVEL.PRIMARY
        })
      },
      {
        label: 'Secondary',
        transformProps: props => ({
          ...props,
          level: LEVEL.SECONDARY
        })
      },
      {
        label: 'Tertiary',
        transformProps: props => ({
          ...props,
          level: LEVEL.TERTIARY
        })
      }
    ]
  }]
};
