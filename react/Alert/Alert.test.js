import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';
import { TYPE, LEVEL } from '../Section/Section';

const renderAlert = props => shallow(
  <Alert
    type={TYPE.POSITIVE}
    level={LEVEL.PRIMARY}
    message="Test message"
    {...props}
  />
);

describe('Alert:', () => {
  describe('types:', () => {
    it('should render positive alerts', () => {
      const alert = renderAlert({ type: TYPE.POSITIVE });
      expect(alert).toMatchSnapshot();
    });

    it('should render info alerts', () => {
      const alert = renderAlert({ type: TYPE.INFO });
      expect(alert).toMatchSnapshot();
    });

    it('should render critical alerts', () => {
      const alert = renderAlert({ type: TYPE.CRITICAL });
      expect(alert).toMatchSnapshot();
    });

    it('should render help alerts', () => {
      const alert = renderAlert({ type: TYPE.HELP });
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
    const alert = renderAlert({ showCloseButton: true });
    expect(alert).toMatchSnapshot();
  });

  it('should call a passed in onClose function when the checkbox fires a change event', () => {
    const onClose = jest.fn();
    const alert = renderAlert({ showCloseButton: true, onClose });
    const event = { someEventData: true };

    alert.find('button').simulate('click', event);
    expect(onClose).toBeCalledWith(event);
  });
});
