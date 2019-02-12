import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';
import { TONE } from '../private/tone';
import { LEVEL } from '../private/level';

const renderAlert = props =>
  shallow(
    <Alert
      tone={TONE.POSITIVE}
      level={LEVEL.PRIMARY}
      message="Test message"
      {...props}
    />
  );

describe('Alert:', () => {
  describe('types:', () => {
    it('should render positive alerts', () => {
      const alert = renderAlert({ tone: TONE.POSITIVE });
      expect(alert).toMatchSnapshot();
    });

    it('should render info alerts', () => {
      const alert = renderAlert({ tone: TONE.INFO });
      expect(alert).toMatchSnapshot();
    });

    it('should render critical alerts', () => {
      const alert = renderAlert({ tone: TONE.CRITICAL });
      expect(alert).toMatchSnapshot();
    });

    it('should render help alerts', () => {
      const alert = renderAlert({ tone: TONE.HELP });
      expect(alert).toMatchSnapshot();
    });
  });

  describe('levels:', () => {
    it('should render primary alerts', () => {
      const alert = renderAlert({ level: LEVEL.PRIMARY });
      expect(alert).toMatchSnapshot();
    });

    it('should render secondary alerts', () => {
      const alert = renderAlert({ level: LEVEL.SECONDARY });
      expect(alert).toMatchSnapshot();
    });

    it('should render tertiary alerts', () => {
      const alert = renderAlert({ level: LEVEL.TERTIARY });
      expect(alert).toMatchSnapshot();
    });
  });

  it('should render the pullout style', () => {
    const alert = renderAlert({ pullout: true });
    expect(alert).toMatchSnapshot();
  });

  it('should render with a hidden icon', () => {
    const alert = renderAlert({ hideIcon: true });
    expect(alert).toMatchSnapshot();
  });

  it('should render a close button', () => {
    const onClose = jest.fn();
    const alert = renderAlert({ onClose });
    expect(alert).toMatchSnapshot();
  });

  it('should call a passed in onClose function when the button fires a click event', () => {
    const onClose = jest.fn();
    const alert = renderAlert({ onClose });
    const event = { someEventData: true };

    alert.find('button').simulate('click', event);
    expect(onClose).toBeCalledWith(event);
  });

  it('should pass through additional props', () => {
    const alert = renderAlert({ 'custom-prop': true });
    expect(alert).toMatchSnapshot();
  });

  it('will accept a node in a the message prop', () => {
    const alert = renderAlert({ message: <span>I'm a node</span> });
    expect(alert).toMatchSnapshot();
  });
});
