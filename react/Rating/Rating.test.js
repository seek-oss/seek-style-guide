import { render } from 'enzyme';
import React from 'react';
import Rating from './Rating';

describe('Rating', () => {
  it('should render with starClassName', () => {
    const wrapper = render(
      <Rating rating={5.0} starClassName={'star-class-name'} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const wrapper = render(
      <Rating rating={5.0} className={'root-class-name'} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with description', () => {
    const wrapper = render(
      <Rating rating={5.0} description="overall rating from..." />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with description as a component', () => {
    const SomeComponent = () => <span>overall rating</span>;
    const wrapper = render(
      <Rating rating={5.0} description={<SomeComponent />} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('should render correct star rating', () => {
    const ratings = [2.74, 2.75, 3.74, 3.75, 0.0, 5.0];

    ratings.forEach(rating => {
      it(`when rating is: ${rating}`, () => {
        const wrapper = render(<Rating rating={rating} />);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('should render correct size', () => {
    const sizes = ['heading', 'headline', 'hero'];

    sizes.forEach(size => {
      it(`when size is: ${size}`, () => {
        const wrapper = render(<Rating rating={3.5} {...{ [size]: true }} />);
        expect(wrapper).toMatchSnapshot();
      });
    });

    sizes.forEach(size => {
      it(`when size is: ${size} and rating text is shown`, () => {
        const wrapper = render(
          <Rating rating={4} {...{ [size]: true }} showTextRating />
        );
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
