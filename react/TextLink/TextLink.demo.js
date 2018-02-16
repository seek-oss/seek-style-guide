import React from 'react';
import PropTypes from 'prop-types';
import TextLink from './TextLink';
import Text from '../Text/Text';

const TextLinkContainer = ({ component: DemoComponent, componentProps }) => (
  <Text>
    <DemoComponent {...componentProps} />
  </Text>
);
TextLinkContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

export default {
  route: '/text-link',
  title: 'Text Link',
  category: 'Typography',
  component: TextLink,
  container: TextLinkContainer,
  initialProps: {
    href: '#',
    children: 'Text link'
  },
  options: [
    {
      label: 'Chevron',
      type: 'radio',
      states: [
        {
          label: 'No chevron',
          transformProps: props => props
        },
        {
          label: 'Up',
          transformProps: props => ({
            ...props,
            chevron: 'up'
          })
        },
        {
          label: 'Down',
          transformProps: props => ({
            ...props,
            chevron: 'down'
          })
        },
        {
          label: 'Right',
          transformProps: props => ({
            ...props,
            chevron: 'right'
          })
        },
        {
          label: 'Left',
          transformProps: props => ({
            ...props,
            chevron: 'left'
          })
        }
      ]
    }
  ]
};
