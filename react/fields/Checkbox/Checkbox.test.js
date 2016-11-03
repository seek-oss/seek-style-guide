import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import {
  createRenderer,
  Simulate,
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
import SyntheticEvent from 'react/lib/SyntheticEvent';
import { findAllWithClass } from 'react-shallow-testutils';
import Checkbox from './Checkbox';

chai.use(sinonChai);

const eventMatcher = sinon.match.instanceOf(SyntheticEvent);

const renderer = createRenderer();

describe('Checkbox', () => {
  let element, checkbox, input, errors;

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
    checkbox = renderer.render(element);
    input = findAllWithClass(checkbox, 'input')[0] || null;
  }

  function renderToDom(jsx) {
    element = jsx;
    checkbox = renderIntoDocument(element);
    input = findRenderedDOMComponentWithClass(checkbox, 'input');
  }

  it('should have a displayName', () => {
    render(<Checkbox />);
    expect(element.type.displayName).to.equal('Checkbox');
  });

  describe('inputProps', () => {
    const handleChange = sinon.spy();

    beforeEach(() => {
      handleChange.reset();
    });

    it('should invoke the onChange handler when touched', () => {
      const props = {
        id: 'still-in-role',
        label: 'still in role',
        inputProps: {
          onChange: handleChange,
          checked: false
        }
      };
      renderToDom(<Checkbox {...props} />);

      Simulate.change(input, { 'target': { 'checked': true } });
      expect(handleChange.calledOnce).to.equal(true);
      expect(handleChange).to.be.calledWith(eventMatcher);
    });
  });
});
