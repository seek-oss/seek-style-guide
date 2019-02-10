import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Card, Section } from 'seek-style-guide/react';
import { TONE } from '../private/tone';
import { LEVEL } from '../private/level';
import * as sketch from './Alert.sketch';

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
  category: 'Form',
  component: Alert,
  container: Container,
  sketch,
  initialProps: {
    tone: TONE.POSITIVE,
    level: LEVEL.PRIMARY,
    message: "I'm some timely text that helps the user understand something",
    hideIcon: false,
    onClose: null
  },
  options: [
    {
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
          label: 'Close button / handler',
          transformProps: ({ onClose, ...props }) => ({
            ...props,
            onClose: () => console.log('On close handler called')
          })
        },
        {
          label: 'Pullout',
          transformProps: ({ pullout, ...props }) => ({
            ...props,
            pullout: !pullout
          })
        }
      ]
    },
    {
      label: 'Tone',
      type: 'radio',
      states: [
        {
          label: 'Positive',
          transformProps: props => ({
            ...props,
            tone: TONE.POSITIVE
          })
        },
        {
          label: 'Info',
          transformProps: props => ({
            ...props,
            tone: TONE.INFO
          })
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            tone: TONE.CRITICAL
          })
        },
        {
          label: 'Help',
          transformProps: props => ({
            ...props,
            tone: TONE.HELP
          })
        }
      ]
    },
    {
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
    }
  ]
};
