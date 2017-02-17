import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import {
  createRenderer
} from 'react-addons-test-utils';
import {
  findAllWithClass,
  findAllWithType
} from 'react-shallow-testutils';
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
  let element, dropdown, label, input, help, message, messageIcon, placeholder, optionGroup, childOptions, errors, option;

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
    message = findAllWithClass(dropdown, 'message')[0] || null;
    messageIcon = findAllWithClass(dropdown, 'messageIcon')[0] || null;
    placeholder = findAllWithType(dropdown, 'option')[0] || null;
    optionGroup = findAllWithType(dropdown, 'optgroup')[0] || null;
    childOptions = findAllWithType(optionGroup, 'option') || null;
    option = findAllWithType(dropdown, 'option')[1] || null;
  }

  function messageText() {
    return message.props.children[1];
  }

  function placeholderText() {
    return placeholder.props.children;
  }

  it('should have a displayName', () => {
    render(<Dropdown inputProps={{ value: '' }} />);
    expect(element.type.displayName).to.equal('Dropdown');
  });

  describe('id', () => {
    it('should error if `id` is not a string', () => {
      render(<Dropdown inputProps={{ value: '' }} id={true} />);
      expect(errors[0]).to.match(/Invalid prop `id`/);
    });
  });

  describe('options', () => {
    const opt = [{ label: 'suburbs', value: '3130' }];
    it('should render options correctly', () => {
      render(<Dropdown inputProps={{ value: '' }} options={opt} />);
      expect(option.props.value).to.equal('3130');
    });
  });

  describe('Option Group', () => {
    before(() => {
      const opts = [{ label: 'suburbs', value: [{ label: 'truganina', value: '3029' }, { label: 'wl', value: '3029' }] }];
      render(<Dropdown inputProps={{ value: '' }} options={opts} />);
    });
    it('should render optgroup correctly', () => {
      expect(optionGroup.props.label).to.equal('suburbs');
    });
    it('should render optgroup children correctly', () => {
      expect(optionGroup.props.children.length).to.equal(2);
    });
    it('should render 1st optgroup child value correctly', () => {
      expect(childOptions[0].props.children).to.equal('truganina');
    });
    it('should render 2nd optgroup child value correctly', () => {
      expect(childOptions[1].props.children).to.equal('wl');
    });
  });

  describe('label', () => {
    it('should not be rendered by default', () => {
      render(<Dropdown inputProps={{ value: '' }} />);
      expect(label).to.equal(null);
    });

    it('should have `htmlFor` equal to `id` when `label` is specified', () => {
      render(<Dropdown inputProps={{ value: '' }} id="firstName" label="First Name" />);
      expect(label.props).to.contain.keys({ htmlFor: 'firstName' });
    });

    it('should have the right text when `label` is specified', () => {
      render(<Dropdown inputProps={{ value: '' }} id="firstName" label="First Name" />);
      expect(label.props.children).to.equal('First Name');
    });

    it('should error if `id` is not specified but `label` is', () => {
      render(<Dropdown inputProps={{ value: '' }} label="First Name" />);
      expect(errors[0]).to.match(/have an `id`/);
    });
  });

  describe('labelProps', () => {
    it('should error if `labelProps` is not an object', () => {
      render(<Dropdown inputProps={{ value: '' }} id="firstName" label="First Name" labelProps="data-automation=first-name" />);
      expect(errors[0]).to.match(/Invalid prop `labelProps`/);
    });

    it('should error if `labelProps` is specified but `label` is not', () => {
      render(<Dropdown inputProps={{ value: '' }} labelProps={{ 'data-automation': 'first-name' }} />);
      expect(errors[0]).to.match(/Specifying `labelProps` is redundant/);
    });

    it('should error if `labelProps`\'s `htmlFor` is specified', () => {
      render(<Dropdown inputProps={{ value: '' }} id="firstName" label="First Name" labelProps={{ htmlFor: 'ignored' }} />);
      expect(errors[0]).to.match(/`labelProps.htmlFor` will be overridden by `id`/);
    });

    it('should pass through className to the label', () => {
      render(<Dropdown inputProps={{ value: '' }} id="firstName" label="First Name" labelProps={{ className: 'first-name-label' }} />);
      expect(label.props.className).to.match(/first-name-label$/);
    });

    it('should pass through other props to the label', () => {
      render(<Dropdown inputProps={{ value: '' }} id="firstName" label="First Name" labelProps={{ 'data-automation': 'first-name-label' }} />);
      expect(label.props['data-automation']).to.equal('first-name-label');
    });
  });

  describe('input', () => {
    it('should not have an `id` if it is not specified', () => {
      render(<Dropdown inputProps={{ value: '' }} />);
      expect(input.props).not.to.include.keys('id');
    });
  });

  describe('placeholder', () => {
    it('should render placeholder as first option in list ', () => {
      render(<Dropdown inputProps={{ value: '' }} options={options} placeholder="test" />);
      expect(placeholderText()).to.equal('test');
    });
  });

  describe('inputProps', () => {
    it('should error if `inputProps` is not an object', () => {
      render(<Dropdown inputProps="hey" />);
      expect(errors[0]).to.match(/Invalid prop `inputProps`/);
    });

    it('should error if `inputProps.value` is not supplied', () => {
      render(<Dropdown inputProps={{}} />);
      expect(errors[0]).to.match(/Invalid prop `inputProps.value` of type `undefined` supplied to `Dropdown`, expected `string`/);
    });

    it('should error if `inputProps.value` is not a string', () => {
      render(<Dropdown inputProps={{ value: 2 }} />);
      expect(errors[0]).to.match(/Invalid prop `inputProps.value` of type `number` supplied to `Dropdown`, expected `string`/);
    });

    it('should error if `inputProps`\'s `id` is specified', () => {
      render(<Dropdown id="firstName" inputProps={{ id: 'ignored', value: '' }} />);
      expect(errors[0]).to.match(/`inputProps.id` will be overridden by `id`/);
    });

    it('should pass through className to the input', () => {
      render(<Dropdown inputProps={{ className: 'first-name-field' }} />);
      expect(input.props.className).to.match(/first-name-field$/);
    });

    it('should pass through other props to the input', () => {
      render(<Dropdown inputProps={{ id: 'firstName', 'data-automation': 'first-name-field' }} />);
      expect(input.props.id).to.equal('firstName');
      expect(input.props['data-automation']).to.equal('first-name-field');
    });
  });

  describe('message', () => {
    it('should not be rendered by default', () => {
      render(<Dropdown inputProps={{ value: '' }} />);
      expect(message).to.equal(null);
    });

    it('should have the right text when `message` is specified and no icon by default', () => {
      render(<Dropdown inputProps={{ value: '' }} message="Something went wrong" />);
      expect(messageText()).to.equal('Something went wrong');
      expect(messageIcon).to.equal(null);
    });

    it('should pass through className to the message', () => {
      render(<Dropdown inputProps={{ value: '' }} message="Something went wrong" messageProps={{ className: 'first-name-message' }} />);
      expect(message.props.className).to.match(/first-name-message$/);
    });

    it('should default to secondary text', () => {
      render(<Dropdown inputProps={{ value: '' }} message="Something went wrong" />);
      expect(message.props.secondary).to.equal(true);
    });

    it('should have the noMarginBottom className if passed a string', () => {
      render(<Dropdown inputProps={{ value: '' }} message="Something went wrong" />);
      expect(dropdown.props.className).to.contain('noMarginBottom');
    });

    it('should have the noMarginBottom className if false', () => {
      render(<Dropdown inputProps={{ value: '' }} message={false} />);
      expect(dropdown.props.className).to.contain('noMarginBottom');
    });

    describe('messageProps', () => {
      it('should pass through other props to the message', () => {
        render(<Dropdown inputProps={{ value: '' }} message="Something went wrong" messageProps={{ 'data-automation': 'first-name-message' }} />);
        expect(message.props['data-automation']).to.equal('first-name-message');
      });
    });

    describe('valid', () => {
      describe('set to false', () => {
        it('Dropdown should have the invalid className, message should have a icon and set text as critical', () => {
          render(<Dropdown inputProps={{ value: '' }} valid={false} message="Something went wrong" />);
          expect(dropdown.props.className).to.contain('invalid');
          expect(messageIcon).not.to.equal(null);
          expect(message.props.critical).to.equal(true);
        });
      });

      describe('set to true', () => {
        it('Message should have a icon and set text as positive', () => {
          render(<Dropdown inputProps={{ value: '' }} valid={true} message="Something went right" />);
          expect(messageIcon).not.to.equal(null);
          expect(message.props.positive).to.equal(true);
        });
      });
    });

    describe('valid & messageProps secondary', () => {
      it('secondary messageProps trumps valid = true but still have icon', () => {
        render(<Dropdown inputProps={{ value: '' }} valid={true} message="Something went right" messageProps={{ secondary: true }} />);
        expect(messageIcon).not.to.equal(null);
        expect(message.props.positive).not.to.equal(true);
        expect(message.props.secondary).to.equal(true);
      });

      it('secondary messageProps trumps valid = false but still have icon', () => {
        render(<Dropdown inputProps={{ value: '' }} valid={false} message="Something went wrong" messageProps={{ secondary: true }} />);
        expect(messageIcon).not.to.equal(null);
        expect(message.props.critical).not.to.equal(true);
        expect(message.props.secondary).to.equal(true);
      });
    });
  });
});
