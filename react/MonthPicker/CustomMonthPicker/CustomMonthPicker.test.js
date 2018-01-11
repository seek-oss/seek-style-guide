import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import CustomMonthPicker from './CustomMonthPicker';
import {
  renderIntoDocument,
  Simulate,
  scryRenderedDOMComponentsWithClass
} from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import { findAllWithClass } from 'react-shallow-testutils';

chai.use(sinonChai);

const renderer = createRenderer();

describe('CustomMonthPicker', () => {
  let element, monthPicker, errors, value, monthDropdown, yearDropdown;

  beforeEach(() => {
    errors = [];
    value = {};

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
    monthDropdown = findAllWithClass(monthPicker, 'dropdown')[0] || null;
    yearDropdown = findAllWithClass(monthPicker, 'dropdown')[1] || null;
  }

  function renderToDom(jsx) {
    element = jsx;
    monthPicker = renderIntoDocument(element);
    monthDropdown =
      scryRenderedDOMComponentsWithClass(monthPicker, 'dropdownInput')[0] ||
      null;
    yearDropdown =
      scryRenderedDOMComponentsWithClass(monthPicker, 'dropdownInput')[1] ||
      null;
  }

  it('should have a displayName', () => {
    render(<CustomMonthPicker />);
    expect(element.type.displayName).to.equal('CustomMonthPicker');
  });

  it('should render without exploding', () => {
    render(<CustomMonthPicker />);
    expect(errors.length).to.equal(0);
  });

  it('should send valid prop to false to both dropdowns when valid is false', () => {
    render(<CustomMonthPicker valid={false} />);
    expect(monthDropdown.props.valid).to.equal(false);
    expect(yearDropdown.props.valid).to.equal(false);
  });

  it('should send correct month year format in onChange handler when month is changed', () => {
    const onChange = newValue => {
      value = newValue;
    };
    renderToDom(
      <CustomMonthPicker
        minYear={2000}
        maxYear={2010}
        onChange={onChange}
        value={{ month: 6, year: 2010 }}
      />
    );
    monthDropdown.value = '11';
    Simulate.change(monthDropdown);
    expect(value).to.deep.equal({
      month: 11,
      year: 2010
    });
  });

  it('should send correct month year format in onChange handler when year is changed', () => {
    const onChange = newValue => {
      value = newValue;
    };
    renderToDom(
      <CustomMonthPicker
        minYear={1990}
        maxYear={2010}
        onChange={onChange}
        value={{ month: 6, year: 2010 }}
      />
    );
    yearDropdown.value = '1999';
    Simulate.change(yearDropdown);
    expect(value).to.deep.equal({
      month: 6,
      year: 1999
    });
  });
});
