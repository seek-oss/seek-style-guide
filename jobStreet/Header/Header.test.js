import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_PENDING
} from 'seek-asia-style-guide/react/private/authStatusTypes';

describe('JobStreet header component', () => {
  describe('Localisation', () => {
    it('should render en-my', () => {
      const wrapper = shallow(
        <Header
          language="en"
          country="my"
          authenticationStatus={UNAUTHENTICATED}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Authentication status', () => {
    it('should render with authenticated user', () => {
      expect(
        shallow(
          <Header
            language="en"
            country="my"
            authenticationStatus={AUTHENTICATED}
            username="Oliver Q."
          />
        )
      ).toMatchSnapshot();
    });

    it('should render with unauthenticated user', () => {
      expect(
        shallow(
          <Header
            language="en"
            country="my"
            authenticationStatus={UNAUTHENTICATED}
          />
        )
      ).toMatchSnapshot();
    });

    it('should render when pending authenticating user', () => {
      expect(
        shallow(
          <Header language="en" country="my" authenticationStatus={AUTH_PENDING} />
        )
      ).toMatchSnapshot();
    });
  });
});
