import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import {
  createRenderer,
  Simulate,
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
import SyntheticEvent from 'react/lib/SyntheticEvent';
import { findAllWithClass } from 'react-shallow-testutils';
import Checkbox from './Checkbox';

chai.use(sinonChai);

const eventMatcher = sinon.match.instanceOf(SyntheticEvent);

const renderer = createRenderer();

describe('Checkbox', () => {
  let element, checkbox, rootElement, input, label, errors;

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
    label = findAllWithClass(checkbox, 'label')[0] || null;
  }

  function renderToDom(jsx) {
    element = jsx;
    checkbox = renderIntoDocument(element);
    rootElement = scryRenderedDOMComponentsWithClass(checkbox, 'root')[0];
    label = scryRenderedDOMComponentsWithClass(checkbox, 'label')[0];
    input = findRenderedDOMComponentWithClass(checkbox, 'input');
  }

  it('should have a displayName', () => {
    render(<Checkbox />);
    expect(element.type.displayName).to.equal('Checkbox');
  });

  it('should pass through id', () => {
    const id = 'test';
    renderToDom(<Checkbox id={id} />);
    expect(input.id).to.equal(id);
  });

  it('should pass through className', () => {
    const className = 'test';
    renderToDom(<Checkbox className={className} />);
    expect(rootElement.classList.contains('test')).to.equal(true);
  });

  it('should have `htmlFor` equal to `id` when `label` is specified', () => {
    render(<Checkbox id="still-in-role" label="Still in role" />);
    expect(label.props).to.contain.keys({ htmlFor: 'still-in-role' });
  });

  describe('inputProps', () => {
    it('should invoke the onChange handler when touched', () => {
      const handleChange = sinon.spy();
      handleChange.reset();
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

    it('should pass through className', () => {
      renderToDom(<Checkbox id='test' inputProps={{ checked: true }} />);
      expect(input.checked).to.equal(true);
    });

    it('should pass through other props to the input', () => {
      render(<Checkbox inputProps={{ 'data-automation': 'first-name-field' }} />);
      expect(input.props['data-automation']).to.equal('first-name-field');
    });
  });
});
