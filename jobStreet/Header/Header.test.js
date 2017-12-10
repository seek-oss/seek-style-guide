import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('JobStreet header component', () => {
  describe('Localisation', () => {
    it('should render en-my', () => {
      const wrapper = shallow(<Header language="en" country="my" authenticationStatus="unathenticated" />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Authentication status', () => {
    it('should render with authenticated user', () => {
      expect(shallow(
        <Header language="en" country="my" authenticationStatus="authenticated" username="Oliver Q." />
      )).toMatchSnapshot();
    });

    it('should render with unauthenticated user', () => {
      expect(shallow(
        <Header language="en" country="my" authenticationStatus="unauthenticated" />
      )).toMatchSnapshot();
    });

    it('should render when pending authenticating user', () => {
      expect(shallow(
        <Header language="en" country="my" authenticationStatus="pending" />
      )).toMatchSnapshot();
    });
  })
});
