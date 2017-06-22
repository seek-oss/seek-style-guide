import { shallow } from 'enzyme';
import React from 'react';
import TextLink from './TextLink';

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

  it('should render with chevron', () => {
    expect(shallow(<TextLink chevron="right">Google</TextLink>)).toMatchSnapshot();
  });
});
