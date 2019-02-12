import React from 'react';
import { shallow } from 'enzyme';
import Radio from './Radio';

describe('Radio', () => {
  const requiredProps = {
    id: 'testRadio',
    label: 'Still in role',
    checked: false,
    onChange: () => {}
  };

  it('should render with simple props', () => {
    const wrapper = shallow(<Radio {...requiredProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const className = 'testClassname';
    const wrapper = shallow(<Radio {...requiredProps} className={className} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as checked', () => {
    const wrapper = shallow(<Radio {...requiredProps} checked={true} />);
    const inputChecked = wrapper.find('input').prop('checked');
    expect(inputChecked).toEqual(true);
  });

  it('should pass through the value', () => {
    const wrapper = shallow(
      <Radio {...requiredProps} value="foo" checked={true} />
    );
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toEqual('foo');
  });

  it('should invoke the change handler', () => {
    const onChange = jest.fn();
    const props = { ...requiredProps, onChange, checked: false };
    const checkedEvent = { target: { checked: true } };
    const wrapper = shallow(<Radio {...props} />);
    wrapper.find('input').simulate('change', checkedEvent);
    expect(onChange).toBeCalledWith(checkedEvent);
  });

  it('should invoke the focus handler', () => {
    const onFocus = jest.fn();
    const props = { ...requiredProps, onFocus };
    const wrapper = shallow(<Radio {...props} />);
    wrapper.find('input').simulate('focus');
    expect(onFocus.mock.calls.length).toBe(1);
  });

  it('should invoke the blur handler', () => {
    const onBlur = jest.fn();
    const props = { ...requiredProps, onBlur };
    const wrapper = shallow(<Radio {...props} />);
    wrapper.find('input').simulate('blur');
    expect(onBlur.mock.calls.length).toBe(1);
  });

  describe('inputProps', () => {
    it('should invoke the change handler', () => {
      const onChange = jest.fn();
      const props = {
        ...requiredProps,
        inputProps: { onChange, checked: false }
      };
      const checkedEvent = { target: { checked: true } };
      const wrapper = shallow(<Radio {...props} />);
      wrapper.find('input').simulate('change', checkedEvent);
      expect(onChange).toBeCalledWith(checkedEvent);
    });

    it('should invoke the focus handler', () => {
      const onFocus = jest.fn();
      const props = { ...requiredProps, inputProps: { onFocus } };
      const wrapper = shallow(<Radio {...props} />);
      wrapper.find('input').simulate('focus');
      expect(onFocus.mock.calls.length).toBe(1);
    });

    it('should invoke the blur handler', () => {
      const onBlur = jest.fn();
      const props = { ...requiredProps, inputProps: { onBlur } };
      const wrapper = shallow(<Radio {...props} />);
      wrapper.find('input').simulate('blur');
      expect(onBlur.mock.calls.length).toBe(1);
    });

    it('should pass through other props to the input', () => {
      const wrapper = shallow(
        <Radio
          {...requiredProps}
          inputProps={{ checked: true, 'data-automation': 'first-name-field' }}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
