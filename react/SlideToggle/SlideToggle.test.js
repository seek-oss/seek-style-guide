import React from 'react';
import { shallow } from 'enzyme';

import SlideToggle from './SlideToggle';

const renderSlideToggle = (props, children) =>
  shallow(
    <SlideToggle id="testSlideToggle" label="Test toggle" {...props}>
      {children}
    </SlideToggle>
  );

describe('Slide toggle:', () => {
  it('should render with default props', () => {
    expect(renderSlideToggle()).toMatchSnapshot();
  });

  it('should render a checked state', () => {
    expect(renderSlideToggle({ checked: true })).toMatchSnapshot();
  });

  it('should render with the label on the left', () => {
    expect(renderSlideToggle({ position: 'left' })).toMatchSnapshot();
  });

  it('should render with the label hidden', () => {
    expect(renderSlideToggle({ hideLabel: true })).toMatchSnapshot();
  });

  it('should call a passed in onChange function when the checkbox fires a change event', () => {
    const onChange = jest.fn();
    const slideToggle = renderSlideToggle({ onChange });
    const check = { target: { checked: true } };

    slideToggle.find('input').simulate('change', check);
    expect(onChange).toBeCalledWith(check);
  });
});
