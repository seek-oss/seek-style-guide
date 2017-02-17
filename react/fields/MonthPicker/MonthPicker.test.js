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

  describe('message', () => {
    it('should not be rendered by default', () => {
      render(<MonthPicker />);
      expect(message).to.equal(null);
    });

    it('should have the right text when `message` is specified and no icon by default', () => {
      render(<MonthPicker message="Something went wrong" />);
      expect(messageText()).to.equal('Something went wrong');
      expect(messageIcon).to.equal(null);
    });

    it('should pass through className to the message', () => {
      render(<MonthPicker message="Something went wrong" messageProps={{ className: 'first-name-message' }} />);
      expect(message.props.className).to.match(/first-name-message$/);
    });

    it('should default to secondary text', () => {
      render(<MonthPicker message="Something went wrong" />);
      expect(message.props.secondary).to.equal(true);
    });

    it('should have the noMarginBottom className if passed a string', () => {
      render(<MonthPicker message="Something went wrong" />);
      expect(monthPicker.props.className).to.contain('noMarginBottom');
    });

    it('should have the noMarginBottom className if false', () => {
      render(<MonthPicker message={false} />);
      expect(monthPicker.props.className).to.contain('noMarginBottom');
    });

    describe('messageProps', () => {
      it('should pass through other props to the message', () => {
        render(<MonthPicker message="Something went wrong" messageProps={{ 'data-automation': 'first-name-message' }} />);
        expect(message.props['data-automation']).to.equal('first-name-message');
      });
    });

    describe('valid', () => {
      describe('set to false', () => {
        it('MonthPicker should have the message should have a icon and set text as critical', () => {
          render(<MonthPicker valid={false} message="Something went wrong" />);
          expect(messageIcon).not.to.equal(null);
          expect(message.props.critical).to.equal(true);
        });
      });

      describe('set to true', () => {
        it('Message should have a icon and set text as positive', () => {
          render(<MonthPicker valid={true} message="Something went right" />);
          expect(messageIcon).not.to.equal(null);
          expect(message.props.positive).to.equal(true);
        });
      });
    });

    describe('valid & messageProps secondary', () => {
      it('secondary messageProps trumps valid = true but still have icon', () => {
        render(<MonthPicker valid={true} message="Something went right" messageProps={{ secondary: true }} />);
        expect(messageIcon).not.to.equal(null);
        expect(message.props.positive).not.to.equal(true);
        expect(message.props.secondary).to.equal(true);
      });

      it('secondary messageProps trumps valid = false but still have icon', () => {
        render(<MonthPicker valid={false} message="Something went wrong" messageProps={{ secondary: true }} />);
        expect(messageIcon).not.to.equal(null);
        expect(message.props.critical).not.to.equal(true);
        expect(message.props.secondary).to.equal(true);
      });
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
