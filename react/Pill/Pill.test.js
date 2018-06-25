import React from 'react';
import { shallow, render } from 'enzyme';
import Pill from './Pill';

const renderPill = props => shallow(
  <Pill
    text="I am a pill"
    {...props}
  />
);

describe('Pill:', () => {
  it('should render a static pill', () => {
    const pill = renderPill();
    expect(pill).toMatchSnapshot();
  });

  it('should render a child component', () => {
    const ChildComponent = () => (<div>Hello</div>);
    expect(render(<Pill text={<ChildComponent />} />)).toMatchSnapshot();
  });

  it('should render an interactive pill', () => {
    const pill = renderPill({ onClose: () => {} });
    expect(pill).toMatchSnapshot();
  });

  it('should call a passed in onClose function when the button fires a click event', () => {
    const onClose = jest.fn();
    const alert = renderPill({ onClose });
    const event = { someEventData: true };

    alert.find('button').simulate('click', event);
    expect(onClose).toBeCalledWith(event);
  });

  it('should pass through additional props', () => {
    const alert = renderPill({ 'custom-prop': true });
    expect(alert).toMatchSnapshot();
  });

  it('should render an additional class for the static pill', () => {
    const alert = renderPill({ className: 'test-class' });
    expect(alert).toMatchSnapshot();
  });

  it('should render an additional class for the interactive pill', () => {
    const alert = renderPill({
      className: 'test-class',
      onClose: () => {}
    });
    expect(alert).toMatchSnapshot();
  });
});
