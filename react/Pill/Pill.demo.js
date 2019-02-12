import React from 'react';
import PropTypes from 'prop-types';
import { Pill, Card, Section } from 'seek-style-guide/react';
import * as sketch from './Pill.sketch';

const Container = ({ component: DemoComponent, componentProps }) => (
  <Card style={{ width: '500px' }}>
    <Section>
      <DemoComponent {...componentProps} />
      <DemoComponent {...componentProps} />
      <DemoComponent {...componentProps} />
      <DemoComponent {...componentProps} />
      <DemoComponent {...componentProps} />
      <DemoComponent {...componentProps} />
    </Section>
  </Card>
);

Container.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/pill',
  title: 'Pill',
  category: 'Form',
  component: Pill,
  container: Container,
  sketch,
  initialProps: {
    children: "I'm a pill",
    onClose: null
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Close button',
          transformProps: ({ onClose, ...props }) => ({
            ...props,
            onClose: () => console.log('On close handler called')
          })
        }
      ]
    }
  ]
};
