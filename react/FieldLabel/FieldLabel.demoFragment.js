import React from 'react';
import TextLink from '../TextLink/TextLink';

export default [
  {
    label: 'Secondary label',
    type: 'checklist',
    states: [
      {
        label: 'Secondary label',
        transformProps: props => ({
          ...props,
          secondaryLabel: '(Max 30 characters)'
        })
      },
      {
        label: 'Tertiary label',
        transformProps: props => ({
          ...props,
          tertiaryLabel: <TextLink>Help?</TextLink>
        })
      }
    ]
  }
];
