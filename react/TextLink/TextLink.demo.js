import TextLink from './TextLink';
import Text from '../Text/Text';

import { sizes } from '../private/withTextProps';
import capitalize from 'lodash/capitalize';

export default {
  route: '/text-link',
  title: 'Text Link',
  category: 'Typography',
  component: TextLink,
  initialProps: {
    href: '#',
    children: 'Text link',
    component: Text,
    chevron: 'up'
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
        }
      ]
    },
    {
      label: 'Sizes',
      type: 'radio',
      states: [
        {
          label: 'Default',
          transformProps: props => props
        },
        ...sizes.map(size => ({
          label: capitalize(size),
          transformProps: props => ({
            ...props,
            [size]: true
          })
        }))
      ]
    }
  ]
};
