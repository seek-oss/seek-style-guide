import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import { findAllWithClass, findAllWithType } from 'react-shallow-testutils';
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
  let element,
    dropdown,
    input,
    placeholder,
    optionGroup,
    childOptions,
    errors,
    option;

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
    input = findAllWithClass(dropdown, 'Dropdown__dropdown')[0] || null;
    placeholder = findAllWithType(dropdown, 'option')[0] || null;
    optionGroup = findAllWithType(dropdown, 'optgroup')[0] || null;
    childOptions = findAllWithType(optionGroup, 'option') || null;
    option = findAllWithType(dropdown, 'option')[1] || null;
  }

  function placeholderText() {
    return placeholder.props.children;
  }

  it('should have a displayName', () => {
    render(<Dropdown id="testDropdown" value="" />);
    expect(element.type.displayName).to.equal('Dropdown');
  });

  describe('id', () => {
    it('should error if `id` is not a string', () => {
      render(<Dropdown id={true} value="" />);
      expect(errors[0]).to.match(/Invalid prop `id`/);
    });
  });

  it('should pass through the value', () => {
    const wrapper = shallow(<Dropdown id="testDropdown" value="foo" />);
    const selectValue = wrapper.find('select').prop('value');
    expect(selectValue).to.equal('foo');
  });

  it('should invoke the focus handler', () => {
    const onFocus = jest.fn();
    const wrapper = shallow(
      <Dropdown id="testDropdown" value="" onFocus={onFocus} />
    );
    wrapper.find('select').simulate('focus');
    expect(onFocus.mock.calls.length).to.equal(1);
  });

  it('should invoke the blur handler', () => {
    const onBlur = jest.fn();
    const wrapper = shallow(
      <Dropdown id="testDropdown" value="" onBlur={onBlur} />
    );
    wrapper.find('select').simulate('blur');
    expect(onBlur.mock.calls.length).to.equal(1);
  });

  it('should invoke the change handler', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Dropdown id="testDropdown" value="" onChange={onChange} />
    );
    wrapper.find('select').simulate('change', { target: { value: 'foo' } });
    expect(onChange.mock.calls.length).to.equal(1);
    expect(onChange.mock.calls[0][0].target.value).to.equal('foo');
  });

  describe('options', () => {
    const opt = [{ label: 'suburbs', value: '3130' }];
    it('should render options correctly', () => {
      render(<Dropdown id="testDropdown" value="" options={opt} />);
      expect(option.props.value).to.equal('3130');
    });
  });

  describe('Option Group', () => {
    beforeAll(() => {
      const opts = [
        {
          label: 'suburbs',
          value: [
            { label: 'truganina', value: '3029' },
            { label: 'wl', value: '3029' }
          ]
        }
      ];
      render(<Dropdown id="testDropdown" value="" options={opts} />);
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

  describe('placeholder', () => {
    it('should render placeholder as first option in list ', () => {
      render(
        <Dropdown
          id="testDropdown"
          value=""
          options={options}
          placeholder="test"
        />
      );
      expect(placeholderText()).to.equal('test');
    });
  });

  describe('inputProps', () => {
    it('should pass through className to the input', () => {
      render(
        <Dropdown
          id="testDropdown"
          inputProps={{ className: 'first-name-field' }}
        />
      );
      expect(input.props.className).to.match(/first-name-field$/);
    });

    it('should invoke the focus handler', () => {
      const onFocus = jest.fn();
      const wrapper = shallow(
        <Dropdown id="testDropdown" value="" inputProps={{ onFocus }} />
      );
      wrapper.find('select').simulate('focus');
      expect(onFocus.mock.calls.length).to.equal(1);
    });

    it('should invoke the blur handler', () => {
      const onBlur = jest.fn();
      const wrapper = shallow(
        <Dropdown id="testDropdown" value="" inputProps={{ onBlur }} />
      );
      wrapper.find('select').simulate('blur');
      expect(onBlur.mock.calls.length).to.equal(1);
    });

    it('should invoke the change handler', () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <Dropdown id="testDropdown" value="" inputProps={{ onChange }} />
      );
      wrapper.find('select').simulate('change', { target: { value: 'foo' } });
      expect(onChange.mock.calls.length).to.equal(1);
      expect(onChange.mock.calls[0][0].target.value).to.equal('foo');
    });

    it('should pass through other props to the input', () => {
      render(
        <Dropdown
          id="testDropdown"
          inputProps={{
            id: 'firstName',
            value: 'value',
            'data-automation': 'first-name-field'
          }}
        />
      );
      expect(input.props.id).to.equal('firstName');
      expect(input.props.value).to.equal('value');
      expect(input.props['data-automation']).to.equal('first-name-field');
    });
  });

  describe('valid and tone', () => {
    describe('if valid is set to false', () => {
      it('should have the invalid className', () => {
        render(<Dropdown id="testDropdown" valid={false} />);
        expect(dropdown.props.className).to.contain('invalid');
      });
    });

    describe('if valid is set to false but a tone is provided', () => {
      it('should not render the invalid style if tone is set to positive', () => {
        render(<Dropdown id="testDropdown" valid={false} tone="positive" />);
        expect(dropdown.props.className).to.not.contain('invalid');
      });
    });

    describe('if valid is set to true but a critical tone is set', () => {
      it('should render the invalid style for tone="critical" even if the field is valid', () => {
        render(<Dropdown id="testDropdown" tone="critical" valid="true" />);
        expect(dropdown.props.className).to.contain('invalid');
      });
    });
  });
});
