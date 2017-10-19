import React from 'react';
import PropTypes from 'prop-types';
import { CardGroup, Card, Text, PageBlock, Section } from 'seek-style-guide/react';

const CardGroupContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <Section>
      <DemoComponent {...componentProps} />
    </Section>
  </PageBlock>
);
CardGroupContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/card-group',
  title: 'Card Group',
  component: CardGroup,
  container: CardGroupContainer,
  block: true,
  initialProps: {
    children: [
      <Card key="1">
        <Section>
          <Text heading>Living Style Guide</Text>
        </Section>
      </Card>,
      <Card key="2">
        <Section>
          <Text heading>Living Style Guide</Text>
        </Section>
      </Card>,
      <Card key="3">
        <Section>
          <Text heading>Living Style Guide</Text>
        </Section>
      </Card>
    ]
  },
  options: []
};
