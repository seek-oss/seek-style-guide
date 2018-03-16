import React from 'react';
import { shallow } from 'enzyme';

import Text from '../Text/Text';

import BulletPointList from './BulletPointList';

describe('BulletPointList', () => {
  it('renders with standard text', () => {
    const wrapper = shallow(
      <BulletPointList>
        <Text>Foo</Text>
        <Text>Bar</Text>
      </BulletPointList>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
