import React from 'react';
import PropTypes from 'prop-types';
import { Card, Text, PageBlock, Section } from 'seek-style-guide/react';

const CardContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <Section>
      <DemoComponent {...componentProps} />
    </Section>
  </PageBlock>
);
CardContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/card',
  title: 'Card',
  component: Card,
  container: CardContainer,
  block: true,
  initialProps: {
    children: (
      <Section>
        <Text heading>Living Style Guide</Text>
        <Text>This is some text inside a card.</Text>
      </Section>
    )
  },
  options: [
    {
      label: 'States',
      type: 'checkbox',
      states: [
        {
          label: 'Transparent',
          transformProps: props => ({
            ...props,
            transparent: true
          })
        }
      ]
    }
  ]
};
