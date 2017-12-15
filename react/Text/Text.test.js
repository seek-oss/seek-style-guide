import { shallow } from 'enzyme';
import React from 'react';
import Text from './Text';

describe('Text', () => {
  it('should render with defaults', () => {
    expect(shallow(<Text>Hello</Text>)).toMatchSnapshot();
  });

  it('should render as heading', () => {
    expect(shallow(<Text heading>Hello</Text>)).toMatchSnapshot();
    expect(shallow(<Text size="heading">Hello</Text>)).toMatchSnapshot();
  });
});
