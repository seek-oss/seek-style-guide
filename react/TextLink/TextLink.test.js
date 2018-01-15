import { render } from 'enzyme';
import React from 'react';
import TextLink from './TextLink';

describe('TextLink', () => {
  it('should render with defaults', () => {
    expect(render(<TextLink />)).toMatchSnapshot();
  });

  it('should render with className', () => {
    expect(render(<TextLink className="foo" />)).toMatchSnapshot();
  });

  it('should render with children', () => {
    expect(render(<TextLink>Google</TextLink>)).toMatchSnapshot();
  });

  it('should render with chevron', () => {
    expect(render(<TextLink chevron="right">Google</TextLink>)).toMatchSnapshot();
  });
});
