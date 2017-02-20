import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import {
  createRenderer,
  Simulate,
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import SyntheticEvent from 'react-dom/lib/SyntheticEvent';
import { findAllWithClass } from 'react-shallow-testutils';
import TextField from './TextField';

chai.use(sinonChai);

const eventMatcher = sinon.match.instanceOf(SyntheticEvent);

const renderer = createRenderer();

describe('TextField', () => {
  let element, textField, rootElement, label, input, message, messageIcon, clearField, errors;

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
    label = findAllWithClass(textField, 'label')[0] || null;
    input = findAllWithClass(textField, 'input')[0] || null;
    message = findAllWithClass(textField, 'message')[0] || null;
    messageIcon = findAllWithClass(textField, 'messageIcon')[0] || null;
  }

  function renderToDom(jsx) {
    element = jsx;
    textField = renderIntoDocument(element);
    rootElement = scryRenderedDOMComponentsWithClass(textField, 'root')[0];
    input = findRenderedDOMComponentWithClass(textField, 'input');
    clearField = findRenderedDOMComponentWithClass(textField, 'clearField');
  }

  function messageText() {
    return message.props.children[1];
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

  describe('label', () => {
    it('should not be rendered by default', () => {
      render(<TextField />);
      expect(label).to.equal(null);
    });

    it('should have `htmlFor` equal to `id` when `label` is specified', () => {
      render(<TextField id="firstName" label="First Name" />);
      expect(label.props).to.contain.keys({ htmlFor: 'firstName' });
    });

    it('should have the right text when `label` is specified', () => {
      render(<TextField id="firstName" label="First Name" />);
      expect(label.props.children).to.equal('First Name');
    });

    it('should error if `id` is not specified but `label` is', () => {
      render(<TextField label="First Name" />);
      expect(errors[0]).to.match(/have an `id`/);
    });
  });

  describe('labelProps', () => {
    it('should error if `labelProps` is not an object', () => {
      render(<TextField id="firstName" label="First Name" labelProps="data-automation=first-name" />);
      expect(errors[0]).to.match(/Invalid prop `labelProps`/);
    });

    it('should error if `labelProps` is specified but `label` is not', () => {
      render(<TextField labelProps={{ 'data-automation': 'first-name' }} />);
      expect(errors[0]).to.match(/Specifying `labelProps` is redundant/);
    });

    it('should error if `labelProps`\'s `htmlFor` is specified', () => {
      render(<TextField id="firstName" label="First Name" labelProps={{ htmlFor: 'ignored' }} />);
      expect(errors[0]).to.match(/`labelProps.htmlFor` will be overridden by `id`/);
    });

    it('should pass through className to the label', () => {
      render(<TextField id="firstName" label="First Name" labelProps={{ className: 'first-name-label' }} />);
      expect(label.props.className).to.match(/first-name-label$/);
    });

    it('should pass through other props to the label', () => {
      render(<TextField id="firstName" label="First Name" labelProps={{ 'data-automation': 'first-name-label' }} />);
      expect(label.props['data-automation']).to.equal('first-name-label');
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

  describe('message', () => {
    it('should not be rendered by default', () => {
      render(<TextField />);
      expect(message).to.equal(null);
    });

    it('should have the right text when `message` is specified', () => {
      render(<TextField message="Something went wrong" />);
      expect(messageText()).to.equal('Something went wrong');
    });

    it('should not render the message icon when `message` is specified and TextField is valid', () => {
      render(<TextField message="Something went wrong" />);
      expect(messageIcon).to.equal(null);
    });

    it('should pass through className to the message', () => {
      render(<TextField message="Something went wrong" messageProps={{ className: 'first-name-message' }} />);
      expect(message.props.className).to.match(/first-name-message$/);
    });

    it('should default to secondary text', () => {
      render(<TextField message="Something went wrong" />);
      expect(message.props.secondary).to.equal(true);
    });

    it('should have the hasMessage className', () => {
      render(<TextField message="Something went wrong" />);
      expect(textField.props.className).to.contain('hasMessage');
    });

    describe('messageProps', () => {
      it('should pass through other props to the message', () => {
        render(<TextField message="Something went wrong" messageProps={{ 'data-automation': 'first-name-message' }} />);
        expect(message.props['data-automation']).to.equal('first-name-message');
      });

      describe('critical', () => {
        it('should render a message icon', () => {
          render(<TextField invalid={true} message="Something went wrong" messageProps={{ critical: true }} />);
          expect(messageIcon).not.to.equal(null);
        });

        it('should set text as critical not secondary', () => {
          render(<TextField invalid={true} message="Something went wrong" messageProps={{ critical: true }} />);
          expect(message.props.critical).to.equal(true);
        });
      });

      describe('positive', () => {
        it('should render a message icon', () => {
          render(<TextField invalid={true} message="Something went wrong" messageProps={{ positive: true }} />);
          expect(messageIcon).not.to.equal(null);
        });

        it('should set text as positive not secondary', () => {
          render(<TextField invalid={true} message="Something went wrong" messageProps={{ positive: true }} />);
          expect(message.props.positive).to.equal(true);
        });
      });

      describe('valid', () => {
        it('should render a message icon', () => {
          render(<TextField invalid={true} message="Something went wrong" messageProps={{ valid: true }} />);
          expect(messageIcon).not.to.equal(null);
        });
      });
    });
  });

  describe('invalid', () => {
    it('should have the invalid className', () => {
      render(<TextField invalid={true} />);
      expect(textField.props.className).to.contain('invalid');
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

    it('should invoke the clear handler when touched', () => {
      renderToDom(<TextField onClear={handleClear} />);
      Simulate.touchStart(clearField);
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
