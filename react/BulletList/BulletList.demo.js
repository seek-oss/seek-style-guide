import React from 'react';
import { BulletList, Bullet } from 'seek-style-guide/react';
import * as sketch from './BulletList.sketch';

export default {
  route: '/bullet-list',
  title: 'Bullet List',
  category: 'Typography',
  component: 'div',
  sketch,
  initialProps: {
    children: (
      <BulletList>
        <Bullet>Bullet point 1</Bullet>
        <Bullet>Bullet point 2</Bullet>
        <Bullet>Bullet point 3</Bullet>
      </BulletList>
    )
  },
  options: [
    {
      label: 'Type',
      type: 'radio',
      states: [
        {
          label: 'Standard',
          transformProps: props => ({
            ...props,
            children: (
              <BulletList>
                <Bullet>Bullet point 1</Bullet>
                <Bullet>Bullet point 2</Bullet>
                <Bullet>Bullet point 3</Bullet>
              </BulletList>
            )
          })
        },
        {
          label: 'Subheading',
          transformProps: props => ({
            ...props,
            children: (
              <BulletList>
                <Bullet subheading>Bullet point 1</Bullet>
                <Bullet subheading>Bullet point 2</Bullet>
                <Bullet subheading>Bullet point 3</Bullet>
              </BulletList>
            )
          })
        }
      ]
    }
  ]
};
