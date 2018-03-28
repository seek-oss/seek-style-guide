import React from 'react';
import { BulletList, Bullet } from 'seek-style-guide/react';
export const symbols = {
  'BulletList/Small': (
    <BulletList>
      <Bullet small>Bullet point 1</Bullet>
      <Bullet small>Bullet point 2</Bullet>
      <Bullet small>Bullet point 3</Bullet>
    </BulletList>
  ),
  'BulletList/Standard': (
    <BulletList>
      <Bullet>Bullet point 1</Bullet>
      <Bullet>Bullet point 2</Bullet>
      <Bullet>Bullet point 3</Bullet>
    </BulletList>
  ),
  'BulletList/Subheading': (
    <BulletList>
      <Bullet subheading>Bullet point 1</Bullet>
      <Bullet subheading>Bullet point 2</Bullet>
      <Bullet subheading>Bullet point 3</Bullet>
    </BulletList>
  )
};
