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
    const ratings = [2.74, 2.75, 3.74, 3.75, 0.0, 5.0];

    ratings.forEach(rating => {
      it(`when rating is: ${rating}`, () => {
        const wrapper = shallow(<Rating rating={rating} />);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('should render correct size', () => {
    const sizes = ['substandard', 'superstandard', 'heading'];

    sizes.forEach(size => {
      it(`when size is: ${size}`, () => {
        const wrapper = shallow(<Rating rating={3.5} size={size} />);
        expect(wrapper).toMatchSnapshot();
      });
    });

    sizes.forEach(size => {
      it(`when size is: ${size} and rating text is shown`, () => {
        const wrapper = shallow(<Rating rating={4} size={size} showTextRating />);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
