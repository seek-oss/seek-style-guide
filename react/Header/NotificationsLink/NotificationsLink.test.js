import React from 'react';
import { shallow } from 'enzyme';
import NotificationsLink from './NotificationsLink';

const renderNotificationsLink = props =>
  shallow(<NotificationsLink linkRenderer={() => <a />} {...props} />);

describe('NotificationsLink:', () => {
  describe('when the user is not authenticated', () => {
    it('and they are inExperiment, they should not see the link', () => {
      const component = renderNotificationsLink({
        isAuthenticated: false,
        isInExperiment: true
      });
      expect(component).toMatchSnapshot();
    });

    it('and they are not inExperiment, they should not see the link', () => {
      const component = renderNotificationsLink({
        isAuthenticated: false,
        isInExperiment: false
      });
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the user is authenticated', () => {
    it('and they are inExperiment, they should see the link', () => {
      const component = renderNotificationsLink({
        isAuthenticated: true,
        isInExperiment: true
      });
      expect(component).toMatchSnapshot();
    });

    it('and they are not inExperiment, they should not see the link', () => {
      const component = renderNotificationsLink({
        isAuthenticated: true,
        isInExperiment: false
      });
      expect(component).toMatchSnapshot();
    });
  });
});
