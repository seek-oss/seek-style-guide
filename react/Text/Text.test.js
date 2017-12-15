import { shallow } from 'enzyme';
import React from 'react';
import Text from './Text';

const sizes = ['small', 'substandard', 'superstandard', 'subheading', 'headline', 'heading', 'hero'];

describe('Text', () => {
  it('should render with defaults', () => {
    expect(shallow(<Text>Hello</Text>)).toMatchSnapshot();
  });

  describe('sizes', () => {
    sizes.forEach(size => {
      it(`should render as ${size}`, () => {
        expect(shallow(<Text {...{[size]: true}}>Hello</Text>)).toMatchSnapshot();
        expect(shallow(<Text size={size}>Hello</Text>)).toMatchSnapshot();
      });
    });
  });
});
