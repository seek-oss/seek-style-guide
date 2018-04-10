import React from 'react';
import { shallow } from 'enzyme';

import Radio from './Radio';

describe('Radio', () => {
  const requiredProps = {
    id: 'still-in-role',
    label: 'Still in role'
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

  describe('inputProps', () => {
    it('should invoke the onChange handler when touched', () => {
      const handleChange = jest.fn();
      const props = {
        ...requiredProps,
        inputProps: {
          onChange: handleChange,
          checked: false
        }
      };
      const checkedEvent = { target: { checked: true } };

      const wrapper = shallow(<Radio {...props} />);

      wrapper.find('input').simulate('change', checkedEvent);
      expect(handleChange).toBeCalledWith(checkedEvent);
    });

    it('should render as checked', () => {
      const wrapper = shallow(<Radio {...requiredProps} inputProps={{ checked: true }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should pass through other props to the input', () => {
      const wrapper = shallow(<Radio {...requiredProps} inputProps={{ 'data-automation': 'first-name-field' }} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
