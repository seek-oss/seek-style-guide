import React from 'react';
import PropTypes from 'prop-types';
import { AsidedLayout, PageBlock, Card, Section, Text } from 'seek-style-guide/react';

const AsidedLayoutContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <DemoComponent {...componentProps} />
  </PageBlock>
);
AsidedLayoutContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/asided-layout',
  title: 'Asided Layout',
  component: AsidedLayout,
  container: AsidedLayoutContainer,
  block: true,
  initialProps: {
    size: '30%',
    renderAside: () => (
      <Card transparent>
        <Section>
          <Text heading>Aside</Text>
          <Text>This card is provided via the 'renderAside' prop.</Text>
        </Section>
      </Card>
    ),
    children: [
      <Card key="1">
        <Section>
          <Text heading>Main Content</Text>
          <Text>This card is provided as children.</Text>
        </Section>
      </Card>,
      <Card key="2">
        <Section>
          <Text heading>Another Card</Text>
          <Text>Here's another card for good measure.</Text>
        </Section>
      </Card>
    ]
  },
  options: [
    {
      label: 'Order',
      type: 'checkbox',
      states: [
        {
          label: 'Reverse on mobile',
          transformProps: props => ({
            ...props,
            reverse: true
          })
        }
      ]
    },
    {
      label: 'Size',
      type: 'radio',
      states: [
        {
          label: '30%',
          transformProps: props => ({
            ...props,
            size: '30%'
          })
        },
        {
          label: '40%',
          transformProps: props => ({
            ...props,
            size: '40%'
          })
        },
        {
          label: '200px',
          transformProps: props => ({
            ...props,
            size: '200px'
          })
        }
      ]
    }
  ]
};
