import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import {
  createRenderer
} from 'react-addons-test-utils';
import { findAllWithClass } from 'react-shallow-testutils';
import Textarea from './Textarea';

chai.use(sinonChai);

const renderer = createRenderer();

describe('Textarea', () => {
  let element, textarea, label, input, errors, characterCount, maxCharacters;

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
    textarea = renderer.render(element);
    label = findAllWithClass(textarea, 'label')[0] || null;
    input = findAllWithClass(textarea, 'textarea')[0] || null;
    characterCount = findAllWithClass(textarea, 'characterCount')[0] || null;
    maxCharacters = findAllWithClass(textarea, 'maxCharacters')[0] || null;
  }

  it('should have a displayName', () => {
    render(<Textarea />);
    expect(element.type.displayName).to.equal('Textarea');
  });

  it('should render without errors', () => {
    render(<Textarea />);
    expect(errors.length).to.equal(0);
  });

  describe('id', () => {
    it('should error if `id` is not a string', () => {
      render(<Textarea id={true} />);
      expect(errors[0]).to.match(/Invalid prop `id`/);
    });
  });

  describe('label', () => {
    it('should not be rendered by default', () => {
      render(<Textarea />);
      expect(label).to.equal(null);
    });

    it('should have `htmlFor` equal to `id` when `label` is specified', () => {
      render(<Textarea id="firstName" label="First Name" />);
      expect(label.props).to.contain.keys({ htmlFor: 'firstName' });
    });

    it('should have the right text when `label` is specified', () => {
      render(<Textarea id="firstName" label="First Name" />);
      expect(label.props.children).to.equal('First Name');
    });

    it('should error if `id` is not specified but `label` is', () => {
      render(<Textarea label="First Name" />);
      expect(errors[0]).to.match(/have an `id`/);
    });
  });

  describe('labelProps', () => {
    it('should error if `labelProps` is not an object', () => {
      render(<Textarea id="firstName" label="First Name" labelProps="data-automation=first-name" />);
      expect(errors[0]).to.match(/Invalid prop `labelProps`/);
    });

    it('should error if `labelProps` is specified but `label` is not', () => {
      render(<Textarea labelProps={{ 'data-automation': 'first-name' }} />);
      expect(errors[0]).to.match(/Specifying `labelProps` is redundant/);
    });

    it('should error if `labelProps`\'s `htmlFor` is specified', () => {
      render(<Textarea id="firstName" label="First Name" labelProps={{ htmlFor: 'ignored' }} />);
      expect(errors[0]).to.match(/`labelProps.htmlFor` will be overridden by `id`/);
    });

    it('should pass through className to the label', () => {
      render(<Textarea id="firstName" label="First Name" labelProps={{ className: 'first-name-label' }} />);
      expect(label.props.className).to.match(/first-name-label$/);
    });

    it('should pass through other props to the label', () => {
      render(<Textarea id="firstName" label="First Name" labelProps={{ 'data-automation': 'first-name-label' }} />);
      expect(label.props['data-automation']).to.equal('first-name-label');
    });
  });

  describe('input', () => {
    it('should not have an `id` if it is not specified', () => {
      render(<Textarea />);
      expect(input.props).not.to.include.keys('id');
    });
  });

  describe('inputProps', () => {
    it('should error if `inputProps` is not an object', () => {
      render(<Textarea inputProps="hey" />);
      expect(errors[0]).to.match(/Invalid prop `inputProps`/);
    });

    it('should error if `inputProps`\'s `id` is specified', () => {
      render(<Textarea id="firstName" inputProps={{ id: 'ignored' }} />);
      expect(errors[0]).to.match(/`inputProps.id` will be overridden by `id`/);
    });

    it('should pass through className to the input', () => {
      render(<Textarea inputProps={{ className: 'first-name-field' }} />);
      expect(input.props.className).to.match(/first-name-field$/);
    });

    it('should pass through other props to the input', () => {
      render(<Textarea inputProps={{ id: 'firstName', 'data-automation': 'first-name-field' }} />);
      expect(input.props.id).to.equal('firstName');
      expect(input.props['data-automation']).to.equal('first-name-field');
    });
  });

  describe('valid', () => {
    describe('set to false', () => {
      it('Textarea should have the invalid className', () => {
        render(<Textarea valid={false} />);
        expect(textarea.props.className).to.contain('invalid');
      });
    });
  });

  describe('maxCharacters', () => {
    it('should not be rendered by default', () => {
      render(<Textarea />);
      expect(maxCharacters).to.equal(null);
    });

    it('should error if \`maxCharacters\` is not a number', () => {
      render(<Textarea maxCharacters={true} />);
      expect(errors[0]).to.match(/Invalid prop `maxCharacters`/);
    });

    it('should show maxCharacters message if \`maxCharacters\` is supplied correctly', () => {
      render(<Textarea maxCharacters={300} />);
      expect(maxCharacters.props.children).to.equal('(300 character limit)');
    });
  });

  describe('characterCount', () => {
    it('should not be rendered by default', () => {
      render(<Textarea />);
      expect(characterCount).to.equal(null);
    });

    it('should error if \`countFeedback\` is not a function', () => {
      render(<Textarea countFeedback={true} />);
      expect(errors[0]).to.match(/Invalid prop `countFeedback`/);
    });

    it('should error if \`countFeedback\` is supplied without \`inputProps.value\`', () => {
      const countFeedback = v => ({ count: v.length });
      render(<Textarea countFeedback={countFeedback} />);
      expect(errors[0]).to.match(/`inputProps.value` must be supplied if `countFeedback` is set/);
    });

    it('should show count value if \`countFeedback\` function is supplied correctly', () => {
      const countFeedback = v => ({ count: v.length });
      render(<Textarea countFeedback={countFeedback} inputProps={{ value: 'Test value' }} />);
      expect(characterCount.props.children).to.equal(10);
    });

    it('should hide count value if \`countFeedback\` function returns \`{ show: false }\`', () => {
      const countFeedback = () => ({ show: false });
      render(<Textarea countFeedback={countFeedback} inputProps={{ value: 'Test value' }} />);
      expect(characterCount).to.equal(null);
    });
  });
});
