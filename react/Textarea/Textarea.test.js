import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { findAllWithClass } from 'react-shallow-testutils';
import Textarea from './Textarea';

chai.use(sinonChai);

const renderer = createRenderer();

describe('Textarea', () => {
  let element, textarea, input, errors, characterCount;

  beforeEach(() => {
    errors = [];

    sinon.stub(console, 'error').callsFake(errorMessage => {
      errors.push(errorMessage);
    });
  });

  afterEach(() => {
    console.error.restore();
  });

  function render(jsx) {
    element = jsx;
    textarea = renderer.render(element);
    input = findAllWithClass(textarea, 'textarea')[0] || null;
    characterCount = findAllWithClass(textarea, 'characterCount')[0] || null;
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

  describe('secondaryLabel', () => {
    it('should not be rendered by default', () => {
      render(<Textarea />);
      expect(textarea.props.children[0].props.secondaryLabel).to.equal('');
    });

    it('should pass secondaryLabel message if \`secondaryLabel\` is supplied', () => {
      render(<Textarea secondaryLabel="secondary" />);
      expect(textarea.props.children[0].props.secondaryLabel).to.equal('secondary');
    });
  });

  describe('description', () => {
    it('should not be rendered by default', () => {
      render(<Textarea />);
      expect(textarea.props.children[1]).to.equal(null);
    });

    it('should render description when specified', () => {
      render(<Textarea description="test" />);
      expect(textarea.props.children[1].props.children).to.equal('test');
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
