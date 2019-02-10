import { shallow } from 'enzyme';
import React from 'react';
import TextLink, { chevronDirections } from './TextLink';

describe('TextLink', () => {
  it('should render with defaults', () => {
    expect(shallow(<TextLink />)).toMatchSnapshot();
  });

  it('should render with className', () => {
    expect(shallow(<TextLink className="foo" />)).toMatchSnapshot();
  });

  it('should render with children', () => {
    expect(shallow(<TextLink>Google</TextLink>)).toMatchSnapshot();
  });

  chevronDirections.forEach(direction => {
    it(`should render with ${direction} chevron`, () => {
      expect(
        shallow(<TextLink chevron={direction}>Google</TextLink>)
      ).toMatchSnapshot();
    });
  });

  it('should render with chevron props', () => {
    expect(
      shallow(
        <TextLink chevron="up" chevronProps={{ size: 'hero' }}>
          Google
        </TextLink>
      )
    ).toMatchSnapshot();
  });
});
