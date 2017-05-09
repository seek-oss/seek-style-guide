import React from 'react';
import renderer from 'react-test-renderer';

import PrintVisibilityWrapper from './PrintVisibilityWrapper';

describe('PrintVisibilityWrapper:', () => {
  it('should render with children', () => {
    expect(
      renderer.create(
        <PrintVisibilityWrapper children={<div>foo</div>} />).toJSON()
    ).toMatchSnapshot();
  });

  it('should render with className', () => {
    expect(
      renderer.create(
        <PrintVisibilityWrapper children={<div>foo</div>} className='bar' />).toJSON()
    ).toMatchSnapshot();
  });

  it('should render with isScreenOnly', () => {
    expect(
      renderer.create(
        <PrintVisibilityWrapper children={<div>foo</div>} isScreenOnly />).toJSON()
    ).toMatchSnapshot();
  });

  it('should render with isPrintOnly', () => {
    expect(
      renderer.create(
        <PrintVisibilityWrapper children={<div>foo</div>} isPrintOnly />).toJSON()
    ).toMatchSnapshot();
  });
});
