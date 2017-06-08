import React from 'react';
import renderer from 'react-test-renderer';

import Hidden from './Hidden';

describe('components/grid/hidden', () => {
  it('should render with children', () => {
    expect(
      renderer.create(
        <Hidden>Text</Hidden>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it('should render with classname', () => {
    expect(
      renderer.create(
        <Hidden className="foo">Text</Hidden>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it('should render with screen', () => {
    expect(
      renderer.create(
        <Hidden screen>Text</Hidden>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it('should render with print', () => {
    expect(
      renderer.create(
        <Hidden print>Text</Hidden>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it('should render with desktop', () => {
    expect(
      renderer.create(
        <Hidden desktop>Text</Hidden>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it('should render with mobile', () => {
    expect(
      renderer.create(
        <Hidden mobile>Text</Hidden>
      ).toJSON()
    ).toMatchSnapshot();
  });
});
