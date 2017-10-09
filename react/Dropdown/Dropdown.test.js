import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
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
  let element, dropdown, input, placeholder, optionGroup, childOptions, errors, option;

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
    dropdown = renderer.render(element);
    input = findAllWithClass(dropdown, 'dropdown')[0] || null;
    placeholder = findAllWithType(dropdown, 'option')[0] || null;
    optionGroup = findAllWithType(dropdown, 'optgroup')[0] || null;
    childOptions = findAllWithType(optionGroup, 'option') || null;
    option = findAllWithType(dropdown, 'option')[1] || null;
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
    beforeAll(() => {
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

  describe('valid', () => {
    describe('set to false', () => {
      it('Dropdown should have the invalid className', () => {
        render(<Dropdown inputProps={{ value: '' }} valid={false} />);
        expect(dropdown.props.className).to.contain('invalid');
      });
    });
  });
});
