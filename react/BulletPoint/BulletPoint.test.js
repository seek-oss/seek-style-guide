import React from 'react';
import { shallow } from 'enzyme';

import BulletPoint from './BulletPoint';

import Text from '../Text/Text';

describe('BulletPoint', () => {
  it('renders with standard text', () => {
    const wrapper = shallow(
      <BulletPoint>
        <Text>Foo</Text>
      </BulletPoint>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
