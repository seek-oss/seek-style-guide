import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  const requiredProps = {
    id: 'testCheckbox',
    label: 'Still in role',
    checked: false,
    onChange: () => {}
  };

  it('should render with simple props', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as checked', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} checked={true} />);
    const inputChecked = wrapper.find('input').prop('checked');
    expect(inputChecked).toEqual(true);
  });

  it('should pass through the value', () => {
    const wrapper = shallow(
      <Checkbox {...requiredProps} value="foo" checked={true} />
    );
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toEqual('foo');
  });

  it('should render with className', () => {
    const className = 'testClassname';
    const wrapper = shallow(
      <Checkbox {...requiredProps} className={className} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the invalid style for tone="critical" even if the field is valid', () => {
    expect(
      shallow(<Checkbox {...requiredProps} tone="critical" valid={true} />)
    ).toMatchSnapshot();
  });

  it('should render the invalid style for valid={false} where no tone is set. It should also pass the valid prop', () => {
    expect(
      shallow(<Checkbox {...requiredProps} valid={false} />)
    ).toMatchSnapshot();
  });

  it('should not render the invalid style if tone is set to positive', () => {
    expect(
      shallow(<Checkbox {...requiredProps} valid={false} tone="positive" />)
    ).toMatchSnapshot();
  });

  it('should render with standard checkbox style', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} type="standard" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with button style', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} type="button" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke the change handler', () => {
    const onChange = jest.fn();
    const props = { ...requiredProps, onChange, checked: false };
    const checkedEvent = { target: { checked: true } };
    const wrapper = shallow(<Checkbox {...props} />);
    wrapper.find('input').simulate('change', checkedEvent);
    expect(onChange).toBeCalledWith(checkedEvent);
  });

  it('should invoke the focus handler', () => {
    const onFocus = jest.fn();
    const props = { ...requiredProps, onFocus, checked: false };
    const wrapper = shallow(<Checkbox {...props} />);
    wrapper.find('input').simulate('focus');
    expect(onFocus.mock.calls.length).toEqual(1);
  });

  it('should invoke the blur handler', () => {
    const onBlur = jest.fn();
    const props = { ...requiredProps, onBlur, checked: false };
    const wrapper = shallow(<Checkbox {...props} />);
    wrapper.find('input').simulate('blur');
    expect(onBlur.mock.calls.length).toEqual(1);
  });

  describe('inputProps', () => {
    it('should invoke the change handler', () => {
      const handleChange = jest.fn();
      const props = {
        ...requiredProps,
        inputProps: { onChange: handleChange, checked: false }
      };
      const checkedEvent = { target: { checked: true } };
      const wrapper = shallow(<Checkbox {...props} />);
      wrapper.find('input').simulate('change', checkedEvent);
      expect(handleChange).toBeCalledWith(checkedEvent);
    });

    it('should render as checked', () => {
      const wrapper = shallow(
        <Checkbox {...requiredProps} inputProps={{ checked: true }} />
      );
      const inputChecked = wrapper.find('input').prop('checked');
      expect(inputChecked).toEqual(true);
    });

    it('should pass through other props to the input', () => {
      const wrapper = shallow(
        <Checkbox
          {...requiredProps}
          inputProps={{ 'data-automation': 'first-name-field' }}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('FieldMessage', () => {
    it('should render field message when passed', () => {
      const wrapper = shallow(
        <Checkbox
          {...requiredProps}
          inputProps={{ checked: false }}
          message="Field is invalid"
          valid={false}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
