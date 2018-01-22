import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  const requiredProps = {
    id: 'still-in-role',
    label: 'Still in role',
    inputProps: { checked: false }
  };

  it('should render with simple props', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const className = 'testClassname';
    const wrapper = shallow(<Checkbox {...requiredProps} className={className} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with standard checkbox style', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} type="standard" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with button style', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} type="button" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with checkbox on left hand side', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} position="left" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with checkbox on right hand side', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} position="right" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render full width checkbox', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} fullWidth />);
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

      const wrapper = shallow(<Checkbox {...props} />);

      wrapper.find('input').simulate('change', checkedEvent);
      expect(handleChange).toBeCalledWith(checkedEvent);
    });

    it('should render as checked', () => {
      const wrapper = shallow(<Checkbox {...requiredProps} inputProps={{ checked: true }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should pass through other props to the input', () => {
      const wrapper = shallow(<Checkbox {...requiredProps} inputProps={{ checked: false, 'data-automation': 'first-name-field' }} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
