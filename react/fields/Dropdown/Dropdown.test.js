import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import {
  createRenderer
} from 'react-addons-test-utils';
import { findAllWithClass } from 'react-shallow-testutils';
import Dropdown from './Dropdown';

chai.use(sinonChai);

const renderer = createRenderer();

const options = [
  {
    value: '1',
    label: '1'
  },
  {
    value: '2',
    label: '2'
  }
];

describe('Dropdown', () => {
  let element, dropdown, label, input, help, message, messageIcon, errors;

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
    dropdown = renderer.render(element);
    label = findAllWithClass(dropdown, 'label')[0] || null;
    input = findAllWithClass(dropdown, 'dropdown')[0] || null;
    help = findAllWithClass(dropdown, 'help')[0] || null;
    message = findAllWithClass(dropdown, 'message')[0] || null;
    messageIcon = findAllWithClass(dropdown, 'messageIcon')[0] || null;
  }

  function helpText() {
    return help.props.children;
  }

  function messageText() {
    return message.props.children[1];
  }

  it('should have a displayName', () => {
    render(<Dropdown options={options} />);
    expect(element.type.displayName).to.equal('Dropdown');
  });

  describe('id', () => {
    it('should error if `id` is not a string', () => {
      render(<Dropdown options={options} id={true} />);
      expect(errors[0]).to.match(/Invalid prop `id`/);
    });
  });

  describe('options', () => {
    it('should error if `options` are not provided', () => {
      render(<Dropdown />);
      expect(errors[0]).to.match(/Required prop `options`/);
    });

    it('should error if `options.value` is not a string', () => {
      render(<Dropdown options={[{ value: 2, label: '' }]} />);
      expect(errors[0]).to.match(/Invalid prop `options\[0\].value` of type `number` supplied to `Dropdown`, expected `string`/);
    });

    it('should error if `options.label` is not a string', () => {
      render(<Dropdown options={[{ value: '2', label: 2 }]} />);
      expect(errors[0]).to.match(/Invalid prop `options\[0\].label` of type `number` supplied to `Dropdown`, expected `string`/);
    });
  });

  describe('label', () => {
    it('should not be rendered by default', () => {
      render(<Dropdown options={options} />);
      expect(label).to.equal(null);
    });

    it('should have `htmlFor` equal to `id` when `label` is specified', () => {
      render(<Dropdown options={options} id="firstName" label="First Name" />);
      expect(label.props).to.contain.keys({ htmlFor: 'firstName' });
    });

    it('should have the right text when `label` is specified', () => {
      render(<Dropdown options={options} id="firstName" label="First Name" />);
      expect(label.props.children).to.equal('First Name');
    });

    it('should error if `id` is not specified but `label` is', () => {
      render(<Dropdown options={options} label="First Name" />);
      expect(errors[0]).to.match(/have an `id`/);
    });
  });

  describe('labelProps', () => {
    it('should error if `labelProps` is not an object', () => {
      render(<Dropdown options={options} id="firstName" label="First Name" labelProps="data-automation=first-name" />);
      expect(errors[0]).to.match(/Invalid prop `labelProps`/);
    });

    it('should error if `labelProps` is specified but `label` is not', () => {
      render(<Dropdown options={options} labelProps={{ 'data-automation': 'first-name' }} />);
      expect(errors[0]).to.match(/Specifying `labelProps` is redundant/);
    });

    it('should error if `labelProps`\'s `htmlFor` is specified', () => {
      render(<Dropdown options={options} id="firstName" label="First Name" labelProps={{ htmlFor: 'ignored' }} />);
      expect(errors[0]).to.match(/`labelProps.htmlFor` will be overridden by `id`/);
    });

    it('should pass through className to the label', () => {
      render(<Dropdown options={options} id="firstName" label="First Name" labelProps={{ className: 'first-name-label' }} />);
      expect(label.props.className).to.match(/first-name-label$/);
    });

    it('should pass through other props to the label', () => {
      render(<Dropdown options={options} id="firstName" label="First Name" labelProps={{ 'data-automation': 'first-name-label' }} />);
      expect(label.props['data-automation']).to.equal('first-name-label');
    });
  });

  describe('input', () => {
    it('should not have an `id` if it is not specified', () => {
      render(<Dropdown options={options} />);
      expect(input.props).not.to.include.keys('id');
    });
  });

  describe('inputProps', () => {
    it('should error if `inputProps` is not an object', () => {
      render(<Dropdown options={options} inputProps="hey" />);
      expect(errors[0]).to.match(/Invalid prop `inputProps`/);
    });

    it('should error if `inputProps`\'s `id` is specified', () => {
      render(<Dropdown options={options} id="firstName" inputProps={{ id: 'ignored' }} />);
      expect(errors[0]).to.match(/`inputProps.id` will be overridden by `id`/);
    });

    it('should pass through className to the input', () => {
      render(<Dropdown options={options} inputProps={{ className: 'first-name-field' }} />);
      expect(input.props.className).to.match(/first-name-field$/);
    });

    it('should pass through other props to the input', () => {
      render(<Dropdown options={options} inputProps={{ id: 'firstName', 'data-automation': 'first-name-field' }} />);
      expect(input.props.id).to.equal('firstName');
      expect(input.props['data-automation']).to.equal('first-name-field');
    });
  });

  describe('help', () => {
    it('should not be rendered by default', () => {
      render(<Dropdown options={options} />);
      expect(help).to.equal(null);
    });

    it('should not be rendered when message exists', () => {
      render(<Dropdown options={options} help="e.g. David" message="Something went wrong" />);
      expect(help).to.equal(null);
    });

    it('should have the right text when `help` is specified', () => {
      render(<Dropdown options={options} help="e.g. David" />);
      expect(helpText()).to.equal('e.g. David');
    });

    it('should pass through className to the help text', () => {
      render(<Dropdown options={options} help="e.g. David" helpProps={{ className: 'first-name-help' }} />);
      expect(help.props.className).to.match(/first-name-help$/);
    });

    it('should pass through other props to the help text', () => {
      render(<Dropdown options={options} help="e.g. David" helpProps={{ 'data-automation': 'first-name-help' }} />);
      expect(help.props['data-automation']).to.equal('first-name-help');
    });
  });

  describe('message', () => {
    it('should not be rendered by default', () => {
      render(<Dropdown options={options} />);
      expect(message).to.equal(null);
    });

    it('should have the right text when `message` is specified', () => {
      render(<Dropdown options={options} message="Something went wrong" />);
      expect(messageText()).to.equal('Something went wrong');
    });

    it('should not render the message icon when `message` is specified and Dropdown is valid', () => {
      render(<Dropdown options={options} message="Something went wrong" />);
      expect(messageIcon).to.equal(null);
    });

    it('should pass through className to the message', () => {
      render(<Dropdown options={options} message="Something went wrong" messageProps={{ className: 'first-name-message' }} />);
      expect(message.props.className).to.match(/first-name-message$/);
    });

    it('should pass through other props to the message', () => {
      render(<Dropdown options={options} message="Something went wrong" messageProps={{ 'data-automation': 'first-name-message' }} />);
      expect(message.props['data-automation']).to.equal('first-name-message');
    });
  });

  describe('invalid', () => {
    it('should have the invalid className', () => {
      render(<Dropdown options={options} invalid={true} />);
      expect(dropdown.props.className).to.contain('invalid');
    });

    it('should render a message icon', () => {
      render(<Dropdown options={options} invalid={true} message="Something went wrong" />);
      expect(messageIcon).not.to.equal(null);
    });
  });
});
