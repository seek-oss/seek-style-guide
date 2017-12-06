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
    const ratings = ['2.74', '2.75', '3.74', '3.75', '0', '5'];

    ratings.forEach(rating => {
      it(`when rating is: ${rating}`, () => {
        const wrapper = shallow(<Rating rating={rating} />);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
