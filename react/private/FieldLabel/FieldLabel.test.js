import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { findAllWithType, findAllWithClass } from 'react-shallow-testutils';
import FieldLabel from './FieldLabel';
import Secondary from '../../Secondary/Secondary';
import Strong from '../../Strong/Strong';
import TextLink from '../../TextLink/TextLink';

chai.use(sinonChai);

const renderer = createRenderer();

describe('FieldLabel', () => {
  let element, fieldLabel, label, secondaryLabel, tertiaryLabel, errors, labelText;

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
    fieldLabel = renderer.render(element);
    label = findAllWithType(fieldLabel, 'label')[0] || null;
    labelText = findAllWithType(fieldLabel, Strong)[0] || null;
    secondaryLabel = findAllWithType(fieldLabel, Secondary)[0] || null;
    tertiaryLabel = findAllWithClass(fieldLabel, 'tertiary')[0] || null;
  }

  it('should have a displayName', () => {
    render(<FieldLabel />);
    expect(element.type.displayName).to.equal('FieldLabel');
  });

  describe('label', () => {
    it('should not be rendered by default', () => {
      render(<FieldLabel />);
      expect(label).to.equal(null);
    });

    it('should have `htmlFor` equal to `id` when `label` is specified', () => {
      render(<FieldLabel id="firstName" label="First Name" />);
      expect(label.props).to.contain.keys({ htmlFor: 'firstName' });
    });

    it('should have the right text when `label` is specified', () => {
      render(<FieldLabel id="firstName" label="First Name" labelTextProps={{ className: 'text' }} />);
      expect(labelText.props.children).to.equal('First Name');
    });

    it('should error if `id` is not specified but `label` is', () => {
      render(<FieldLabel label="First Name" />);
      expect(errors[0]).to.match(/have an `id`/);
    });
  });

  describe('secondaryLabel', () => {
    it('should not be rendered by default', () => {
      render(<FieldLabel />);
      expect(secondaryLabel).to.equal(null);
    });

    it('should have the right text when `secondaryLabel` is specified', () => {
      render(<FieldLabel id="firstName" label="First Name" secondaryLabel="Hint Message" />);
      expect(secondaryLabel.props.children).to.equal('Hint Message');
    });
  });

  describe('tertiaryLabel', () => {
    it('should not be rendered by default', () => {
      render(<FieldLabel />);

      expect(tertiaryLabel).to.equal(null);
    });

    it('should have the right text when `tertiaryLabel` is specified', () => {
      render(<FieldLabel id="firstName" label="First Name" tertiaryLabel="Test Tertiary Label" />);
      expect(tertiaryLabel.props.children).to.equal('Test Tertiary Label');
    });

    it('should be able to pass a node to `tertiaryLabel`', () => {
      render(<FieldLabel id="firstName" label="First Name" tertiaryLabel={<TextLink>Tertiary TextLink</TextLink>} />);
      expect(tertiaryLabel.props.children.type.displayName).to.equal('TextLink');
      expect(tertiaryLabel.props.children.props.children).to.equal('Tertiary TextLink');
    });
  });

  describe('labelProps', () => {
    it('should error if `labelProps` is not an object', () => {
      render(<FieldLabel id="firstName" label="First Name" labelProps="data-automation=first-name" />);
      expect(errors[0]).to.match(/Invalid prop `labelProps`/);
    });

    it('should error if `labelProps` is specified but `label` is not', () => {
      render(<FieldLabel labelProps={{ 'data-automation': 'first-name' }} />);
      expect(errors[0]).to.match(/Specifying `labelProps` is redundant/);
    });

    it('should error if `labelProps`\'s `htmlFor` is specified', () => {
      render(<FieldLabel id="firstName" label="First Name" labelProps={{ htmlFor: 'ignored' }} />);
      expect(errors[0]).to.match(/`labelProps.htmlFor` will be overridden by `id`/);
    });

    it('should pass through className to the label', () => {
      render(<FieldLabel id="firstName" label="First Name" labelProps={{ className: 'first-name-label' }} />);
      expect(label.props.className).to.match(/first-name-label$/);
    });

    it('should pass through other props to the label', () => {
      render(<FieldLabel id="firstName" label="First Name" labelProps={{ 'data-automation': 'first-name-label' }} />);
      expect(label.props['data-automation']).to.equal('first-name-label');
    });
  });
});
