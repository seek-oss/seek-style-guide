import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import NativeMonthPicker from './NativeMonthPicker';
import {
  renderIntoDocument,
  Simulate,
  findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import { findAllWithClass } from 'react-shallow-testutils';

chai.use(sinonChai);

const renderer = createRenderer();

describe('NativeMonthPicker', () => {
  let element, rootElement, monthPicker, errors, value, input;

  beforeEach(() => {
    errors = [];

    sinon.stub(console, 'error').callsFake(errorMessage => {
      errors.push(errorMessage);
    });
  });

  afterEach(() => {
    console.error.restore();
  });

  function render(jsx) {
    element = jsx;
    monthPicker = renderer.render(element);
    rootElement =
      findAllWithClass(monthPicker, 'NativeMonthPicker__root')[0] || null;
    input =
      findAllWithClass(monthPicker, 'NativeMonthPicker__input')[0] || null;
  }

  function renderToDom(jsx) {
    element = jsx;
    monthPicker = renderIntoDocument(element);
    input = findRenderedDOMComponentWithClass(
      monthPicker,
      'NativeMonthPicker__input'
    );
  }

  it('should have a displayName', () => {
    render(
      <NativeMonthPicker
        id="testNativeMonthPicker"
        fieldMessageId="testNativeMonthPicker-message"
      />
    );
    expect(element.type.displayName).to.equal('NativeMonthPicker');
  });

  it('should render without exploding', () => {
    render(
      <NativeMonthPicker
        id="testNativeMonthPicker"
        fieldMessageId="testNativeMonthPicker-message"
      />
    );
    expect(errors.length).to.equal(0);
  });

  it('should assign invalid className when valid is false', () => {
    render(
      <NativeMonthPicker
        id="testNativeMonthPicker"
        valid={false}
        fieldMessageId="testNativeMonthPicker-message"
      />
    );
    expect(rootElement.props.className).to.contain('invalid');
  });

  it('should convert monthValue & yearValue to generic month string', () => {
    render(
      <NativeMonthPicker
        id="testNativeMonthPicker"
        value={{ month: 1, year: 2016 }}
        fieldMessageId="testNativeMonthPicker-message"
      />
    );
    expect(input.props.value).to.equal('2016-01');
  });

  it('should send correct month year format in onChange handler', () => {
    const onChange = newValue => {
      value = newValue;
    };
    renderToDom(
      <NativeMonthPicker
        id="testNativeMonthPicker"
        onChange={onChange}
        value={{ month: 6, year: 2010 }}
        fieldMessageId="testNativeMonthPicker-message"
      />
    );
    input.value = '2012-11';
    Simulate.change(input);
    expect(value).to.deep.equal({
      month: 11,
      year: 2012
    });
  });

  it('should send correct month year format in onBlur handler', () => {
    const onBlur = newValue => {
      value = newValue;
    };
    renderToDom(
      <NativeMonthPicker
        id="testNativeMonthPicker"
        onBlur={onBlur}
        value={{ month: 6, year: 2010 }}
        fieldMessageId="testNativeMonthPicker-message"
      />
    );
    input.value = '2012-11';
    Simulate.blur(input);
    expect(value).to.deep.equal({
      month: 11,
      year: 2012
    });
  });

  it('should call onFocus when field has the focus', () => {
    const onFocus = jest.fn();
    renderToDom(
      <NativeMonthPicker
        id="testNativeMonthPicker"
        onFocus={onFocus}
        value={{ month: 6, year: 2010 }}
        fieldMessageId="testNativeMonthPicker-message"
      />
    );
    Simulate.focus(input);
    expect(onFocus.mock.calls.length).equal(1);
  });
});
