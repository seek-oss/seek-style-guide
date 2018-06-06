import { shallow, mount } from 'enzyme';
import React from 'react';
import TextField from './TextField';

describe('TextField', () => {
  const requiredProps = {
    id: 'testTextField',
    onChange: () => {},
    value: ''
  };

  let spy;
  beforeEach(() => {
    spy = jest.spyOn(global.console, 'error');
  });
  afterEach(() => {
    spy.mockRestore();
  });

  it('should render with defaults', () => {
    expect(shallow(<TextField {...requiredProps} />)).toMatchSnapshot();
  });

  it('should pass through the type', () => {
    const wrapper = shallow(<TextField {...requiredProps} type="search" />);
    const inputType = wrapper.find('input').prop('type');
    expect(inputType).toEqual('search');
  });

  it('should pass through the value', () => {
    const wrapper = shallow(<TextField {...requiredProps} value="foo" />);
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toEqual('foo');
  });

  it('should invoke the focus handler', () => {
    const onFocus = jest.fn();
    const wrapper = shallow(<TextField {...requiredProps} onFocus={onFocus} />);
    wrapper.find('input').simulate('focus');
    expect(onFocus.mock.calls.length).toEqual(1);
  });

  it('should invoke the blur handler', () => {
    const onBlur = jest.fn();
    const wrapper = shallow(<TextField {...requiredProps} onBlur={onBlur} />);
    wrapper.find('input').simulate('blur');
    expect(onBlur.mock.calls.length).toEqual(1);
  });

  it('should invoke the change handler', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<TextField {...requiredProps} onChange={onChange} />);
    wrapper.find('input').simulate('change', { target: { value: 'foo' } });
    expect(onChange.mock.calls.length).toEqual(1);
    expect(onChange.mock.calls[0][0].target.value).toEqual('foo');
  });

  it('should render with input props', () => {
    expect(shallow(
      <TextField
        {...requiredProps}
        inputProps={{
          value: 'value',
          className: 'first-name-field',
          'data-automation': 'first-name-field'
        }}
      />)).toMatchSnapshot();
  });

  it('should render with valid false', () => {
    expect(shallow(<TextField {...requiredProps} valid={false} />)).toMatchSnapshot();
  });

  describe('clear button', () => {
    const handleClear = () => {};

    it('should not be visible when value is empty', () => {
      expect(shallow(<TextField {...requiredProps} value="" onClear={handleClear} />)).toMatchSnapshot();
    });

    it('should not be visible when value is provided but no clear handler', () => {
      expect(shallow(<TextField {...requiredProps} value="abc" />)).toMatchSnapshot();
    });

    it('should be visible when value is provided', () => {
      expect(shallow(<TextField {...requiredProps} value="abc" onClear={handleClear} />)).toMatchSnapshot();
    });

    it('should be visible when value has white spaces only', () => {
      expect(shallow(<TextField {...requiredProps} value="  " onClear={handleClear} />)).toMatchSnapshot();
    });

    it('should invoke the clear handler when clicked and focus on input', () => {
      const clickHandlerSpy = jest.fn();

      const wrapper = mount(<TextField {...requiredProps} onClear={clickHandlerSpy} />);
      const input = wrapper.find('input').html();
      const clearButton = wrapper.find('.clearField');

      clearButton.simulate('mouseDown');
      expect(clickHandlerSpy).toBeCalled();
      expect(global.document.activeElement.outerHTML).toEqual(input);
      clickHandlerSpy.mockRestore();
    });

    describe('inputProps', () => {
      it('should not be visible when value is empty', () => {
        expect(shallow(<TextField {...requiredProps} inputProps={{ value: '' }} onClear={handleClear} />)).toMatchSnapshot();
      });

      it('should not be visible when value is provided but no clear handler', () => {
        expect(shallow(<TextField {...requiredProps} inputProps={{ value: 'abc' }} />)).toMatchSnapshot();
      });

      it('should be visible when value is provided', () => {
        expect(shallow(<TextField {...requiredProps} inputProps={{ value: 'abc' }} onClear={handleClear} />)).toMatchSnapshot();
      });

      it('should be visible when value has white spaces only', () => {
        expect(shallow(<TextField {...requiredProps} inputProps={{ value: '  ' }} onClear={handleClear} />)).toMatchSnapshot();
      });
    });
  });
});
