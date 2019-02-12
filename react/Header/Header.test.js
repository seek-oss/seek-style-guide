import React from 'react';
import { render } from 'enzyme';

import Header from './Header';

const renderHeader = props => render(<Header {...props} />);

describe('Header:', () => {
  it('should render with locale of AU', () => {
    expect(renderHeader({ locale: 'AU' })).toMatchSnapshot();
  });

  it('should render with locale of NZ', () => {
    expect(renderHeader({ locale: 'NZ' })).toMatchSnapshot();
  });

  it('should render when authenticated', () => {
    expect(
      renderHeader({
        authenticationStatus: 'authenticated',
        userName: 'Leeroy',
        userEmail: 'leeroybrown@email.com',
        returnUrl: '/jobs'
      })
    ).toMatchSnapshot();
  });

  it('should render when authenticated but username and email is not yet provided', () => {
    expect(
      renderHeader({
        authenticationStatus: 'authenticated',
        userName: '',
        userEmail: ''
      })
    ).toMatchSnapshot();
  });

  it("should render first part of email address when username isn't present", () => {
    expect(
      renderHeader({
        authenticationStatus: 'authenticated',
        userName: '',
        userEmail: 'leeroybrown@email.com'
      })
    ).toMatchSnapshot();
  });

  it('should render when unauthenticated', () => {
    expect(
      renderHeader({ authenticationStatus: 'unauthenticated' })
    ).toMatchSnapshot();
  });

  it('should render when authentication is pending', () => {
    expect(renderHeader({ authenticationStatus: 'pending' })).toMatchSnapshot();
  });

  it("should render when activeTab is 'Profile'", () => {
    expect(renderHeader({ activeTab: 'Profile' })).toMatchSnapshot();
  });

  it('should render with no divider', () => {
    expect(renderHeader({ divider: false })).toMatchSnapshot();
  });

  it('should append returnUrl to signin and register links if present', () => {
    expect(renderHeader({ returnUrl: '/jobs' })).toMatchSnapshot();
  });

  const CustomLogo = () => <div>Custom Logo</div>;
  it('should render with a custom logo', () => {
    expect(renderHeader({ logoComponent: CustomLogo })).toMatchSnapshot();
  });
});
