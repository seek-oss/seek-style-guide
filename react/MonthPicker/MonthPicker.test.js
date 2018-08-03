import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import MonthPicker from './MonthPicker';

chai.use(sinonChai);

const renderer = createRenderer();

describe('MonthPicker', () => {
  let element, monthPicker, errors;

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
    monthPicker = renderer.render(element).props.children[0];
  }

  it('should have a displayName', () => {
    render(<MonthPicker id="testMonthPicker" />);
    expect(element.type.displayName).to.equal('MonthPicker');
  });

  describe('id', () => {
    it('should error if `id` is not a string', () => {
      render(<MonthPicker id={true} />);
      expect(errors[0]).to.match(/Invalid prop `id`/);
    });
  });

  describe('input', () => {
    it('should render the `CustomMonthPicker` when native is not set', () => {
      render(<MonthPicker id="testMonthPicker" />);
      expect(monthPicker.type.displayName).to.equal('CustomMonthPicker');
    });

    it('should render the `NativeMonthPicker` when native is true', () => {
      render(<MonthPicker id="testMonthPicker" native={true} />);
      expect(monthPicker.type.displayName).to.equal('NativeMonthPicker');
    });
  });

  describe('onChange', () => {
    it('should pass onChange prop through to input', () => {
      const onChange = () => {};
      render(<MonthPicker id="testMonthPicker" onChange={onChange} />);
      expect(monthPicker.props.onChange).to.equal(onChange);
    });
  });

  describe('onBlur', () => {
    it('should pass onBlur prop through to input', () => {
      const onBlur = () => {};
      render(<MonthPicker id="testMonthPicker" onBlur={onBlur} />);
      expect(monthPicker.props.onBlur).to.equal(onBlur);
    });
  });

  describe('onFocus', () => {
    it('should pass onFocus prop through to input', () => {
      const onFocus = () => {};
      render(<MonthPicker id="testMonthPicker" onFocus={onFocus} />);
      expect(monthPicker.props.onFocus).to.equal(onFocus);
    });
  });

  describe('value', () => {
    it('should pass value prop through to input', () => {
      const value = { month: 1, year: 2000 };
      render(<MonthPicker id="testMonthPicker" value={value} />);
      expect(monthPicker.props.value).to.equal(value);
    });
  });
});
