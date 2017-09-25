import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'seek-style-guide/react';
import { Card, Section } from 'seek-style-guide/react';
import { LEVEL, TYPE } from './Alert';

const Container = ({ component: DemoComponent, componentProps }) => (
  <Card style={{ width: '500px' }}>
    <Section>
      <DemoComponent {...componentProps} />
    </Section>
  </Card>
);

Container.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/alert',
  title: 'Alert',
  component: Alert,
  container: Container,
  initialProps: {
    type: TYPE.POSITIVE,
    level: LEVEL.PRIMARY,
    message: 'I\'m some timely text that helps the user understand something',
    hideIcon: false,
    onClose: () => console.log('On close handler called')
  },
  options: [{
    label: 'States',
    type: 'checklist',
    states: [
      {
        label: 'Hide icon',
        transformProps: ({ hideIcon, ...props }) => ({
          ...props,
          hideIcon: !hideIcon
        })
      },
      {
        label: 'Show close button',
        transformProps: ({ showCloseButton, ...props }) => ({
          ...props,
          showCloseButton: !showCloseButton
        })
      }
    ]
  },
  {
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
