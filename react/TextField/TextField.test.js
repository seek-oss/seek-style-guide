import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import {
  Simulate,
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass
} from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import SyntheticEvent from 'react-dom/lib/SyntheticEvent';
import { findAllWithClass } from 'react-shallow-testutils';
import TextField from './TextField';

chai.use(sinonChai);

const eventMatcher = sinon.match.instanceOf(SyntheticEvent);

const renderer = createRenderer();

describe('TextField', () => {
  let element, textField, rootElement, input, clearField, errors;

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
    textField = renderer.render(element);
    input = findAllWithClass(textField, 'input')[0] || null;
  }

  function renderToDom(jsx) {
    element = jsx;
    textField = renderIntoDocument(element);
    rootElement = scryRenderedDOMComponentsWithClass(textField, 'root')[0];
    input = findRenderedDOMComponentWithClass(textField, 'input');
    clearField = findRenderedDOMComponentWithClass(textField, 'clearField');
  }

  function isClearButtonVisible() {
    return /\bcanClear\b/.test(rootElement.className);
  }

  it('should have a displayName', () => {
    render(<TextField />);
    expect(element.type.displayName).to.equal('TextField');
  });

  describe('id', () => {
    it('should error if `id` is not a string', () => {
      render(<TextField id={true} />);
      expect(errors[0]).to.match(/Invalid prop `id`/);
    });
  });

  describe('input', () => {
    it('should not have an `id` if it is not specified', () => {
      render(<TextField />);
      expect(input.props).not.to.include.keys('id');
    });
  });

  describe('inputProps', () => {
    it('should error if `inputProps` is not an object', () => {
      render(<TextField inputProps="hey" />);
      expect(errors[0]).to.match(/Invalid prop `inputProps`/);
    });

    it('should error if `inputProps`\'s `id` is specified', () => {
      render(<TextField id="firstName" inputProps={{ id: 'ignored' }} />);
      expect(errors[0]).to.match(/`inputProps.id` will be overridden by `id`/);
    });

    it('should pass through className to the input', () => {
      render(<TextField inputProps={{ className: 'first-name-field' }} />);
      expect(input.props.className).to.match(/first-name-field$/);
    });

    it('should pass through other props to the input', () => {
      render(<TextField inputProps={{ id: 'firstName', 'data-automation': 'first-name-field' }} />);
      expect(input.props.id).to.equal('firstName');
      expect(input.props['data-automation']).to.equal('first-name-field');
    });
  });

  describe('valid', () => {
    describe('set to false', () => {
      it('TextField should have the invalid className', () => {
        render(<TextField valid={false} />);
        expect(textField.props.className).to.contain('invalid');
      });
    });
  });

  describe('clear button', () => {
    const handleBlur = sinon.spy();
    const handleClear = sinon.spy();

    const clickClear = () => {
      Simulate.mouseDown(clearField);
      Simulate.mouseUp(clearField);
      Simulate.click(clearField);
    };

    beforeEach(() => {
      handleBlur.reset();
      handleClear.reset();
    });

    it('should not be visible when value is empty', () => {
      renderToDom(<TextField inputProps={{ value: '' }} onClear={handleClear} />);
      expect(isClearButtonVisible()).to.equal(false);
    });

    it('should be visible when value is provided', () => {
      renderToDom(<TextField inputProps={{ value: 'abc' }} onClear={handleClear} />);
      expect(isClearButtonVisible()).to.equal(true);
    });

    it('should be visible when value has white spaces only', () => {
      renderToDom(<TextField inputProps={{ value: '  ' }} onClear={handleClear} />);
      expect(isClearButtonVisible()).to.equal(true);
    });

    it('should not be visible when value is provided but no clear handler', () => {
      renderToDom(<TextField inputProps={{ value: 'abc' }} />);
      expect(isClearButtonVisible()).to.equal(false);
    });

    it('should invoke the clear handler when clicked', () => {
      renderToDom(<TextField onClear={handleClear} />);
      clickClear();
      expect(handleClear.calledOnce).to.equal(true);
      expect(handleClear).to.be.calledWith(eventMatcher);
    });

    it('should focus the input when clicked', () => {
      renderToDom(<TextField onClear={handleClear} />);
      clickClear();
      expect(global.document.activeElement).to.equal(input);
    });
  });
});
