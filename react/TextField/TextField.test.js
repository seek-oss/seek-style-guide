import { shallow, mount } from 'enzyme';
import React from 'react';
import TextField from './TextField';

describe('TextField', () => {
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'error');
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should render with defaults', () => {
    expect(shallow(<TextField />)).toMatchSnapshot();
  });

  describe('errors', () => {
    it('should error if `id` is not a string', () => {
      const expectedError = expect.stringMatching(
        /Invalid prop `id` of type `boolean` supplied to `TextField`, expected `string/
      );

      shallow(<TextField id={true} />);
      expect(spy).toBeCalledWith(expectedError);
    });

    it('should error if `inputProps` is not an object', () => {
      const expectedError = expect.stringMatching(
        /Invalid prop `inputProps`/
      );

      shallow(<TextField inputProps="hey" />);
      expect(spy).toBeCalledWith(expectedError);
    });

    it('should error if `id` is specified in `inputProps`', () => {
      const expectedError = expect.stringMatching(
        /`inputProps.id` will be overridden by `id`/
      );

      shallow(<TextField id="firstName" inputProps={{ id: 'ignored' }} />);
      expect(spy).toBeCalledWith(expectedError);
    });
  });

  it('should render with input props', () => {
    expect(shallow(
      <TextField
        inputProps={{
          className: 'first-name-field',
          id: 'firstName',
          'data-automation': 'first-name-field'
        }}
      />)).toMatchSnapshot();
  });

  it('should render with valid false', () => {
    expect(shallow(<TextField valid={false} />)).toMatchSnapshot();
  });

  describe('clear button', () => {
    const handleClear = () => {};

    it('should not be visible when value is empty', () => {
      expect(shallow(<TextField inputProps={{ value: '' }} onClear={handleClear} />)).toMatchSnapshot();
    });

    it('should not be visible when value is provided but no clear handler', () => {
      expect(shallow(<TextField inputProps={{ value: 'abc' }} />)).toMatchSnapshot();
    });

    it('should be visible when value is provided', () => {
      expect(shallow(<TextField inputProps={{ value: 'abc' }} onClear={handleClear} />)).toMatchSnapshot();
    });

    it('should be visible when value has white spaces only', () => {
      expect(shallow(<TextField inputProps={{ value: '  ' }} onClear={handleClear} />)).toMatchSnapshot();
    });

    it('should invoke the clear handler when clicked and focus on input', () => {
      const clickHandlerSpy = jest.fn();

      const wrapper = mount(<TextField onClear={clickHandlerSpy} />);
      const input = wrapper.find('input').html();
      const clearButton = wrapper.find('.clearField');

      clearButton.simulate('mouseDown');
      expect(clickHandlerSpy).toBeCalled();
      expect(global.document.activeElement.outerHTML).toEqual(input);
      clickHandlerSpy.mockRestore();
    });
  });
});
