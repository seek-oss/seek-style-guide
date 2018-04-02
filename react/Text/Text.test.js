import { render } from 'enzyme';
import React from 'react';
import Text from './Text';

import { sizes } from '../private/withTextProps';

describe('Text', () => {
  it('should render with defaults', () => {
    expect(render(<Text>Hello</Text>)).toMatchSnapshot();
  });
  it('should render with a custom component', () => {
    expect(render(<Text component="div">Hello</Text>)).toMatchSnapshot();
  });
  it('should render a bullet point', () => {
    expect(render(<Text bullet>Hello</Text>)).toMatchSnapshot();
  });

  describe('sizes', () => {
    sizes.forEach(size => {
      it(`should render as ${size}`, () => {
        expect(render(<Text {...{ [size]: true }}>Hello</Text>)).toMatchSnapshot();
        expect(render(<Text size={size}>Hello</Text>)).toMatchSnapshot();
      });
    });
  });
});
