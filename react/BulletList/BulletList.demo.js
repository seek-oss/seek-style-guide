import React from 'react';
import { BulletList, Bullet } from 'seek-style-guide/react';

const renderChildren = (size = 'Default') =>
  size === 'Default' ? (
    <BulletList>
      <Bullet>Bullet</Bullet>
      <Bullet>Bullet</Bullet>
      <Bullet>Bullet</Bullet>
    </BulletList>
  ) : (
    <BulletList>
      <Bullet {...{ [size.toLowerCase()]: true }}>Bullet</Bullet>
      <Bullet {...{ [size.toLowerCase()]: true }}>Bullet</Bullet>
      <Bullet {...{ [size.toLowerCase()]: true }}>Bullet</Bullet>
    </BulletList>
  );

export default {
  route: '/bullet-list',
  title: 'Bullet List',
  category: 'Typography',
  component: 'div',
  initialProps: {
    children: renderChildren()
  },
  options: [
    {
      label: 'Size',
      type: 'radio',
      states: ['Default', 'Large', 'Standard', 'Small'].map(size => ({
        label: `${String(size)}`,
        transformProps: props => ({
          ...props,
          children: renderChildren(size)
        })
      }))
    }
  ]
};
