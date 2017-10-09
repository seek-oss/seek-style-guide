import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  describe('Localisation', () => {
    it('should render en-hk', () => {
      const wrapper = shallow(<Footer language="en" country="hk" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render en-id', () => {
      const wrapper = shallow(<Footer language="en" country="id" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render en-th', () => {
      const wrapper = shallow(<Footer language="en" country="th" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render en-sg', () => {
      const wrapper = shallow(<Footer language="en" country="sg" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render id-id', () => {
      const wrapper = shallow(<Footer language="id" country="id" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render th-th', () => {
      const wrapper = shallow(<Footer language="th" country="th" />);
      expect(wrapper).toMatchSnapshot();
    });
  })
});