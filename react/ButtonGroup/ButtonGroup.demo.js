import React from 'react';
import { ButtonGroup, Button } from 'seek-style-guide/react';

export default {
  route: '/button-group',
  title: 'Button Group',
  component: ButtonGroup,
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
        },
        {
          label: 'Four Buttons',
          transformProps: props => ({
            ...props,
            children: [
              <Button key="1" color="gray">Send</Button>,
              <Button key="2" color="gray">Print</Button>,
              <Button key="3" color="gray">Clear</Button>,
              <Button key="4" color="gray">Cancel</Button>
            ]
          })
        }
      ]
    }
  ]
};
