import React from 'react';
import renderer from 'react-test-renderer';

import PrintVisibilityWrapper from './PrintVisibilityWrapper';

const renderPrintVisibilityWrapper = props => renderer.create(<PrintVisibilityWrapper {...props} />);

describe('PrintVisibilityWrapper:', () => {
  it('should render with children', () => {
    expect(
      renderer.create(
        <PrintVisibilityWrapper children={<div>foo</div>} />).toJSON()
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