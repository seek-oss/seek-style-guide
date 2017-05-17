import React from 'react';
import renderer from 'react-test-renderer';
import {
  Simulate,
  findRenderedDOMComponentWithTag,
  renderIntoDocument
} from 'react-dom/test-utils';

import SlideToggle from './SlideToggle';

const renderSlideToggle = (props, children) => renderer.create(
  <SlideToggle
    id="testToggle"
    label="Test toggle"
    {...props}>
    {children}
  </SlideToggle>
);

describe('Slide toggle:', () => {
  it('should render with default props', () => {
    expect(renderSlideToggle().toJSON()).toMatchSnapshot();
  });

  it('should render a checked state', () => {
    expect(renderSlideToggle({ checked: true }).toJSON()).toMatchSnapshot();
  });

  it('should render with the label on the left', () => {
    expect(renderSlideToggle({ position: 'left' }).toJSON()).toMatchSnapshot();
  });

  it('should render with the label hidden', () => {
    expect(renderSlideToggle({ hideLabel: true }).toJSON()).toMatchSnapshot();
  });

  it('should call a passed in onToggle function when the checkbox fires a change event', () => {
    const onToggle = jest.fn();
    const slideToggle = renderIntoDocument(
      <SlideToggle
        id="testToggle"
        label="Test toggle"
        onToggle={onToggle}
      />
    );
    const input = findRenderedDOMComponentWithTag(slideToggle, 'input');
    Simulate.change(input);
    expect(onToggle).toHaveBeenCalled();
  });
});
