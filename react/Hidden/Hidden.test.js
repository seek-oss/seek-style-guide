import React from 'react';
import { shallow } from 'enzyme';

import Hidden from './Hidden';

describe('components/grid/hidden', () => {
  it('should render without children', () => {
    const wrapper = shallow(<Hidden />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with children', () => {
    const wrapper = shallow(<Hidden>Text</Hidden>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with classname', () => {
    const wrapper = shallow(<Hidden className="foo">Text</Hidden>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with component', () => {
    const wrapper = shallow(<Hidden component="li">Text</Hidden>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with props', () => {
    const wrapper = shallow(<Hidden data-automation="foo">Text</Hidden>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with screen', () => {
    const wrapper = shallow(<Hidden screen>Text</Hidden>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with print', () => {
    const wrapper = shallow(<Hidden print>Text</Hidden>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with desktop', () => {
    const wrapper = shallow(<Hidden desktop>Text</Hidden>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with mobile', () => {
    const wrapper = shallow(<Hidden mobile>Text</Hidden>);
    expect(wrapper).toMatchSnapshot();
  });
});
