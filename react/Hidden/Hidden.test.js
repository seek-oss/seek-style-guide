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

  it('should render with xs, sm, md', () => {
    expect(
      renderer.create(
        <Hidden xs sm md>Text</Hidden>
      ).toJSON()
    ).toMatchSnapshot();
  });

  it('should render with lg, df', () => {
    expect(
      renderer.create(
        <Hidden lg df>Text</Hidden>
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
});
