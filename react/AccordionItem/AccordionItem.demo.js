import React from 'react';
import PropTypes from 'prop-types';

import {
  AccordionItem,
  Card,
  Section,
  Text,
  TextLink,
  BulletList,
  Bullet
} from 'seek-style-guide/react';

const Container = ({ component: DemoComponent, componentProps }) => (
  <Card style={{ width: '500px' }}>
    <Section>
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

const titleContent = (
  <div style={{ padding: '16px 0' }}>
    <TextLink>
      <Text subheading>Heading</Text>
    </TextLink>
    <Text small>This is some smaller text</Text>
  </div>
);

const content = (
  <div>
    <Text>The quick brown fox jumps over the lazy dog</Text>
    <BulletList>
      <Bullet>Bullet 1</Bullet>
      <Bullet>Bullet 2</Bullet>
      <Bullet>Bullet 3</Bullet>
    </BulletList>
  </div>
);

export default {
  route: '/accordion',
  title: 'Accordion Item',
  category: 'Layout',
  component: AccordionItem,
  container: Container,
  initialProps: {
    title: 'Accordion title',
    onOpen: () => console.log('On open handler called'),
    onClose: () => console.log('On close handler called'),
    children: content
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Custom Title',
          transformProps: ({ onOpen, ...props }) => ({
            ...props,
            title: titleContent
          })
        }
      ]
    }
  ]
};
