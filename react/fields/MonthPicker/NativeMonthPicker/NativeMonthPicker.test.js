import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import NativeMonthPicker from './NativeMonthPicker';
import {
  createRenderer,
  renderIntoDocument,
  Simulate,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
import { findAllWithClass } from 'react-shallow-testutils';

chai.use(sinonChai);

const renderer = createRenderer();

describe('NativeMonthPicker', () => {
  let element, rootElement, monthPicker, errors, value;

  beforeEach(() => {
    errors = [];

    sinon.stub(console, 'error', errorMessage => {
      errors.push(errorMessage);
    });
  });

  afterEach(() => {
    console.error.restore();
  });

  function render(jsx) {
    element = jsx;
    monthPicker = renderer.render(element);
    rootElement = findAllWithClass(monthPicker, 'root')[0] || null;
  }

  function renderToDom(jsx) {
    element = jsx;
    monthPicker = renderIntoDocument(element);
    rootElement = findRenderedDOMComponentWithClass(monthPicker, 'root');
  }

  it('should have a displayName', () => {
    render(<NativeMonthPicker />);
    expect(element.type.displayName).to.equal('NativeMonthPicker');
  });

  it('should render without exploding', () => {
    render(<NativeMonthPicker />);
    expect(errors.length).to.equal(0);
  });

  it('should assign invald className when invalid is true', () => {
    render(<NativeMonthPicker invalid={true} />);
    expect(rootElement.props.className).to.contain('invalid');
  });

  it('should convert monthValue & yearValue to generic month string', () => {
    render(<NativeMonthPicker monthValue={1} yearValue={2016} />);
    expect(rootElement.props.value).to.equal('2016-01');
  });

  it('should send correct month year format in onChange handler', () => {
    const onChange = newValue => {
      value = newValue;
    };
    renderToDom(<NativeMonthPicker onChange={onChange} monthValue={6} yearValue={2010} />);
    rootElement.value = '2012-11';
    Simulate.change(rootElement);
    expect(value).to.deep.equal({
      month: 11,
      year: 2012
    });
  });
});
