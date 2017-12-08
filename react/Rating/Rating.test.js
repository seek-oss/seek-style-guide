import { expect } from 'chai';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Rating from './Rating';

describe('Rating', () => {
  let element, rating;

  const renderer = createRenderer();
  const render = jsx => {
    element = jsx;
    rating = renderer.render(element);
  };
  const testStars = (starElem, conditons) =>
    starElem.forEach((e, i) => expect(conditons[i](e)).to.equal(true));

  const findStars = () => {
    const { props: { children } } = rating;
    return children[1];
  };

  it('should have a displayName', () => {
    render(<Rating rating={3.3} />);
    expect(element.type.displayName).to.equal('Rating');
  });

  it('should render 5 stars', () => {
    render(<Rating rating={3.3} />);
    expect(findStars().length).to.equal(5);
  });

  describe('should render correct star rating', () => {
    const isFilled = ({ props }) => props.filled === true;
    const isHalfFilled = ({ props }) => props.markup === 'mock svg';
    const isEmpty = ({ props }) => props.filled === false;

    it('when rating is: 2.74', () => {
      render(<Rating rating={2.74} />);
      return testStars(findStars(), [isFilled, isFilled, isHalfFilled, isEmpty, isEmpty]);
    });

    it('when rating is: 2.75', () => {
      render(<Rating rating={2.75} />);
      return testStars(findStars(), [isFilled, isFilled, isFilled, isEmpty, isEmpty]);
    });

    it('when rating is: 3.74', () => {
      render(<Rating rating={3.74} />);
      return testStars(findStars(), [isFilled, isFilled, isFilled, isHalfFilled, isEmpty]);
    });

    it('when rating is: 3.75', () => {
      render(<Rating rating={3.75} />);
      return testStars(findStars(), [isFilled, isFilled, isFilled, isFilled, isEmpty]);
    });

    it('when rating is: 0.0', () => {
      render(<Rating rating={0.0} />);
      return testStars(findStars(), [isEmpty, isEmpty, isEmpty, isEmpty, isEmpty]);
    });

    it('when rating is: 5.0', () => {
      render(<Rating rating={5.0} />);
      return testStars(findStars(), [isFilled, isFilled, isFilled, isFilled, isFilled]);
    });
  });

  describe('should apply props', () => {
    it('should apply `starClassName`', () => {
      render(<Rating rating={5.0} starClassName={'star-class-name'} />);
      const hasAppliedSvgClassName = ({ props }) =>
        props.svgClassName === 'star-class-name';

      return testStars(findStars(), [
        hasAppliedSvgClassName,
        hasAppliedSvgClassName,
        hasAppliedSvgClassName,
        hasAppliedSvgClassName,
        hasAppliedSvgClassName
      ]);
    });

    it('should apply `className`', () => {
      render(<Rating rating={5.0} className={'root-class-name'} />);
      expect(rating.props.className).to.equal('root-class-name');
    });
  });
});
