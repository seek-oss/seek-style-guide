import { shallow } from 'enzyme';
import React from 'react';
import Rating from './Rating';

describe('Rating', () => {
  it('should render with starClassName', () => {
    const wrapper = shallow(<Rating rating={5.0} starClassName={'star-class-name'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const wrapper = shallow(<Rating rating={5.0} className={'root-class-name'} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('should render correct star rating', () => {
    it('when rating is: 2.74', () => {
      const wrapper = shallow(<Rating rating={2.74} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('when rating is: 2.75', () => {
      const wrapper = shallow(<Rating rating={2.75} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('when rating is: 3.74', () => {
      const wrapper = shallow(<Rating rating={3.74} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('when rating is: 3.75', () => {
      const wrapper = shallow(<Rating rating={3.75} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('when rating is: 0.0', () => {
      const wrapper = shallow(<Rating rating={0.0} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('when rating is: 5.0', () => {
      const wrapper = shallow(<Rating rating={5.0} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
