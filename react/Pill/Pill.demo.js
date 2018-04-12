import React from 'react';
import PropTypes from 'prop-types';
import { Pill, Card, Section } from 'seek-style-guide/react';

const Container = ({ component: demoComponent, componentProps }) => (
  <Card style={{ width: '500px' }}>
    <Section>
      {demoComponent({ ...componentProps })}
    </Section>
  </Card>
);

Container.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: 'pill',
  title: 'Pill',
  category: 'Form',
  component: props => (
    <div>
      <Pill {...props} />
      <Pill {...props} />
    </div>
  ),
  container: Container,
  // sketch,
  initialProps: {
    text: 'I\'m a pill',
    onClose: null
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Close button / handler',
          transformProps: ({ onClose, ...props }) => ({
            ...props,
            onClose: () => console.log('On close handler called')
          })
        }
      ]
    }
  ]
};
