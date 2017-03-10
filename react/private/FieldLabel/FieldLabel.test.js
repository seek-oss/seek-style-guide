import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { findAllWithClass } from 'react-shallow-testutils';
import FieldLabel from './FieldLabel';

chai.use(sinonChai);

const renderer = createRenderer();

describe('FieldLabel', () => {
  let element, fieldLabel, label, secondaryLabel, errors;

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
    fieldLabel = renderer.render(element);
    label = findAllWithClass(fieldLabel, 'label')[0] || null;
    secondaryLabel = findAllWithClass(fieldLabel, 'secondaryLabel')[0] || null;
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
      expect(label.props.children.props.children[0]).to.equal('First Name');
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
