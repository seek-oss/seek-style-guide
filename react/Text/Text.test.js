import { render } from 'enzyme';
import React from 'react';
import Text from './Text';
import { sizes } from '../private/withTextProps';
import { booleanColors } from '../private/withColorProps';
import colorStyles from '../../theme/atoms/color.less';

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

  describe('boolean colors', () => {
    booleanColors.forEach(booleanColor => {
      it(`should render as ${booleanColor}`, () => {
        expect(render(<Text {...{ [booleanColor]: true }}>Hello</Text>)).toMatchSnapshot();
      });
    });
  });

  describe('colors', () => {
    Object.keys(colorStyles).forEach(color => {
      it(`should render as ${color}`, () => {
        expect(render(<Text color={color}>Hello</Text>)).toMatchSnapshot();
      });
    });
  });
});
