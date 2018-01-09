import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { findAllWithClass } from 'react-shallow-testutils';
import MonthPicker from './MonthPicker';

chai.use(sinonChai);

const renderer = createRenderer();

describe('MonthPicker', () => {
  let element, monthPicker, input, errors;

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
    input = findAllWithClass(monthPicker, 'input')[0] || null;
  }

  it('should have a displayName', () => {
    render(<MonthPicker />);
    expect(element.type.displayName).to.equal('MonthPicker');
  });

  describe('id', () => {
    it('should error if `id` is not a string', () => {
      render(<MonthPicker id={true} />);
      expect(errors[0]).to.match(/Invalid prop `id`/);
    });
  });

  describe('input', () => {
    it('should not have an `id` if it is not specified', () => {
      render(<MonthPicker />);
      expect(input.props).not.to.include.keys('id');
    });

    it('should render the `CustomMonthPicker` when native is not set', () => {
      render(<MonthPicker />);
      expect(input.type.displayName).to.equal('CustomMonthPicker');
    });

    it('should render the `NativeMonthPicker` when native is true', () => {
      render(<MonthPicker native={true} />);
      expect(input.type.displayName).to.equal('NativeMonthPicker');
    });
  });

  describe('onChange', () => {
    it('should pass onChange prop through to input', () => {
      const onChange = () => {};
      render(<MonthPicker onChange={onChange} />);
      expect(input.props.onChange).to.equal(onChange);
    });
  });

  describe('onBlur', () => {
    it('should pass onBlur prop through to input', () => {
      const onBlur = () => {};
      render(<MonthPicker onBlur={onBlur} />);
      expect(input.props.onBlur).to.equal(onBlur);
    });
  });

  describe('value', () => {
    it('should pass value prop through to input', () => {
      const value = { month: 1, year: 2000 };
      render(<MonthPicker value={value} />);
      expect(input.props.value).to.equal(value);
    });
  });
});
