import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

describe('ButtonGroup:', () => {
  it('should render a button group', () => {
    const wrapper = shallow(<ButtonGroup />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with node', () => {
    const wrapper = shallow(<ButtonGroup><Button color="blue"><h5>SEEK</h5></Button></ButtonGroup>);
    expect(wrapper).toMatchSnapshot();
  });
});
