import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  const _Date = Date;

  beforeEach(() => {
    const DATE = new Date('2017');
    global.Date = jest.fn(() => DATE);
    global.Date.getFullYear = _Date.getFullYear;
  });

  afterEach(() => {
    global.Date = _Date;
  });

  describe('Localisation', () => {
    it('should render en-my', () => {
      const wrapper = shallow(<Footer language="en" country="my" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render en-id', () => {
      const wrapper = shallow(<Footer language="en" country="id" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render en-ph', () => {
      const wrapper = shallow(<Footer language="en" country="ph" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render en-sg', () => {
      const wrapper = shallow(<Footer language="en" country="sg" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render en-vn', () => {
      const wrapper = shallow(<Footer language="en" country="vn" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render id-id', () => {
      const wrapper = shallow(<Footer language="id" country="id" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render vi-vn', () => {
      const wrapper = shallow(<Footer language="vi" country="vn" />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
