import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, PageBlock, Section } from 'seek-style-guide/react';
import * as sketch from './ButtonGroup.sketch';

const ButtonGroupContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <Section>
      <DemoComponent {...componentProps} />
    </Section>
  </PageBlock>
);
ButtonGroupContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/button-group',
  title: 'Button Group',
  component: ButtonGroup,
  container: ButtonGroupContainer,
  block: true,
  sketch,
  initialProps: {
    children: <Button color="pink">Create a Profile</Button>
  },
  options: [
    {
      label: 'Number of Buttons',
      type: 'radio',
      states: [
        {
          label: 'One Button',
          transformProps: props => ({
            ...props,
            children: <Button color="pink">Create a Profile</Button>
          })
        },
        {
          label: 'Two Buttons',
          transformProps: props => ({
            ...props,
            children: [
              <Button key="1" color="pink">Create a Profile</Button>,
              <Button key="2" color="transparent">Cancel</Button>
            ]
          })
        },
        {
          label: 'Three Buttons',
          transformProps: props => ({
            ...props,
            children: [
              <Button key="1" color="pink">Create a Profile</Button>,
              <Button key="2" color="transparent">Clear</Button>,
              <Button key="3" color="transparent">Cancel</Button>
            ]
          })
        }
      ]
    }
  ]
};
