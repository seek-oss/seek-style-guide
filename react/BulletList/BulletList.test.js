import React from 'react';
import { shallow } from 'enzyme';

import BulletList from './BulletList';

import Bullet from '../Bullet/Bullet';

describe('BulletList', () => {
  it('renders with standard text', () => {
    const wrapper = shallow(
      <BulletList>
        <Bullet>Foo</Bullet>
        <Bullet>Bar</Bullet>
      </BulletList>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
