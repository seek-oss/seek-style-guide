import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { findAllWithClass } from 'react-shallow-testutils';
import TextField from './TextField';

const renderer = createRenderer();

describe('TextField', () => {
  let element, textField, label, input, help, message, messageIcon, errors;

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
    help = findAllWithClass(textField, 'help')[0] || null;
    message = findAllWithClass(textField, 'message')[0] || null;
    messageIcon = findAllWithClass(textField, 'messageIcon')[0] || null;
  }

  function helpText() {
    return help.props.children;
  }

  function messageText() {
    return message.props.children[1] || null;
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
      expect(label.props.className).to.contain('first-name-label');
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
      expect(input.props.className).to.contain('first-name-field');
    });

    it('should pass through other props to the input', () => {
      render(<TextField inputProps={{ id: 'firstName', 'data-automation': 'first-name-field' }} />);
      expect(input.props.id).to.equal('firstName');
      expect(input.props['data-automation']).to.equal('first-name-field');
    });
  });

  describe('help', () => {
    it('should not be rendered by default', () => {
      render(<TextField />);
      expect(help).to.equal(null);
    });

    it('should not be rendered when message exists', () => {
      render(<TextField help="e.g. David" message="Something went wrong" />);
      expect(help).to.equal(null);
    });

    it('should have the right text when `help` is specified', () => {
      render(<TextField help="e.g. David" />);
      expect(helpText()).to.equal('e.g. David');
    });

    it('should pass through className to the help text', () => {
      render(<TextField help="e.g. David" helpProps={{ className: 'first-name-help' }} />);
      expect(help.props.className).to.contain('first-name-help');
    });

    it('should pass through other props to the help text', () => {
      render(<TextField help="e.g. David" helpProps={{ 'data-automation': 'first-name-help' }} />);
      expect(help.props['data-automation']).to.equal('first-name-help');
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
      expect(message.props.className).to.contain('first-name-message');
    });

    it('should pass through other props to the message', () => {
      render(<TextField message="Something went wrong" messageProps={{ 'data-automation': 'first-name-message' }} />);
      expect(message.props['data-automation']).to.equal('first-name-message');
    });
  });

  describe('invalid', () => {
    it('should have the invalid className', () => {
      render(<TextField invalid={true} />);
      expect(textField.props.className).to.contain('invalid');
    });

    it('should render a message icon', () => {
      render(<TextField invalid={true} message="Something went wrong" />);
      expect(messageIcon).not.to.equal(null);
    });
  });
});
