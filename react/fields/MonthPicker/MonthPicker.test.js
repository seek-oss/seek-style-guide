import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import {
  createRenderer
} from 'react-addons-test-utils';
import { findAllWithClass } from 'react-shallow-testutils';
import MonthPicker from './MonthPicker';

chai.use(sinonChai);

const renderer = createRenderer();

describe('MonthPicker', () => {
  let element, monthPicker, label, input, message, messageIcon, errors;

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
    label = findAllWithClass(monthPicker, 'label')[0] || null;
    input = findAllWithClass(monthPicker, 'input')[0] || null;
    message = findAllWithClass(monthPicker, 'message')[0] || null;
    messageIcon = findAllWithClass(monthPicker, 'messageIcon')[0] || null;
  }

  function messageText() {
    return message.props.children[1];
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

  describe('label', () => {
    it('should not be rendered by default', () => {
      render(<MonthPicker />);
      expect(label).to.equal(null);
    });

    it('should have `htmlFor` equal to `id` when `label` is specified', () => {
      render(<MonthPicker id="firstName" label="First Name" />);
      expect(label.props).to.contain.keys({ htmlFor: 'firstName' });
    });

    it('should have the right text when `label` is specified', () => {
      render(<MonthPicker id="firstName" label="First Name" />);
      expect(label.props.children).to.equal('First Name');
    });

    it('should error if `id` is not specified but `label` is', () => {
      render(<MonthPicker label="First Name" />);
      expect(errors[0]).to.match(/have an `id`/);
    });
  });

  describe('labelProps', () => {
    it('should error if `labelProps` is not an object', () => {
      render(<MonthPicker id="firstName" label="First Name" labelProps="data-automation=first-name" />);
      expect(errors[0]).to.match(/Invalid prop `labelProps`/);
    });

    it('should error if `labelProps` is specified but `label` is not', () => {
      render(<MonthPicker labelProps={{ 'data-automation': 'first-name' }} />);
      expect(errors[0]).to.match(/Specifying `labelProps` is redundant/);
    });

    it('should error if `labelProps`\'s `htmlFor` is specified', () => {
      render(<MonthPicker id="firstName" label="First Name" labelProps={{ htmlFor: 'ignored' }} />);
      expect(errors[0]).to.match(/`labelProps.htmlFor` will be overridden by `id`/);
    });

    it('should pass through className to the label', () => {
      render(<MonthPicker id="firstName" label="First Name" labelProps={{ className: 'first-name-label' }} />);
      expect(label.props.className).to.match(/first-name-label$/);
    });

    it('should pass through other props to the label', () => {
      render(<MonthPicker id="firstName" label="First Name" labelProps={{ 'data-automation': 'first-name-label' }} />);
      expect(label.props['data-automation']).to.equal('first-name-label');
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

  describe('inputProps', () => {
    it('should error if `inputProps` is not an object', () => {
      render(<MonthPicker inputProps="hey" />);
      expect(errors[0]).to.match(/Invalid prop `inputProps`/);
    });

    it('should error if `inputProps`\'s `id` is specified', () => {
      render(<MonthPicker id="firstName" inputProps={{ id: 'ignored' }} />);
      expect(errors[0]).to.match(/`inputProps.id` will be overridden by `id`/);
    });

    it('should pass through className to the input', () => {
      render(<MonthPicker inputProps={{ className: 'first-name-field' }} />);
      expect(input.props.className).to.match(/first-name-field$/);
    });

    it('should pass through other props to the input', () => {
      render(<MonthPicker inputProps={{ id: 'firstName', 'data-automation': 'first-name-field' }} />);
      expect(input.props.id).to.equal('firstName');
      expect(input.props['data-automation']).to.equal('first-name-field');
    });
  });

  describe('message', () => {
    it('should not be rendered by default', () => {
      render(<MonthPicker />);
      expect(message).to.equal(null);
    });

    it('should have the right text when `message` is specified', () => {
      render(<MonthPicker message="Something went wrong" />);
      expect(messageText()).to.equal('Something went wrong');
    });

    it('should not render the message icon when `message` is specified and MonthPicker is valid', () => {
      render(<MonthPicker message="Something went wrong" />);
      expect(messageIcon).to.equal(null);
    });

    it('should pass through className to the message', () => {
      render(<MonthPicker message="Something went wrong" messageProps={{ className: 'first-name-message' }} />);
      expect(message.props.className).to.match(/first-name-message$/);
    });

    it('should pass through other props to the message', () => {
      render(<MonthPicker message="Something went wrong" messageProps={{ 'data-automation': 'first-name-message' }} />);
      expect(message.props['data-automation']).to.equal('first-name-message');
    });
  });

  describe('invalid', () => {
    it('should have the invalid className', () => {
      render(<MonthPicker invalid={true} />);
      expect(monthPicker.props.className).to.contain('invalid');
    });

    it('should render a message icon', () => {
      render(<MonthPicker invalid={true} message="Something went wrong" />);
      expect(messageIcon).not.to.equal(null);
    });
  });
});
