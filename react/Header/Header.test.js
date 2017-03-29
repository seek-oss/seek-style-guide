import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

const renderHeader = props => renderer.create(<Header {...props} />);

describe('Header:', () => {
  it('should render with locale of AU', () => {
    expect(renderHeader({ locale: 'AU' }).toJSON()).toMatchSnapshot();
  });

  it('should render with locale of NZ', () => {
    expect(renderHeader({ locale: 'NZ' }).toJSON()).toMatchSnapshot();
  });

  it('should render when authenticated', () => {
    expect(renderHeader({ authenticationStatus: 'authenticated', userName: 'Leeroy' }).toJSON()).toMatchSnapshot();
  });

  it('should render when authenticated but username is not yet provided', () => {
    expect(renderHeader({ authenticationStatus: 'authenticated', userName: '' }).toJSON()).toMatchSnapshot();
  });

  it('should render when unauthenticated', () => {
    expect(renderHeader({ authenticationStatus: 'unauthenticated' }).toJSON()).toMatchSnapshot();
  });

  it('should render when authentication is pending', () => {
    expect(renderHeader({ authenticationStatus: 'pending' }).toJSON()).toMatchSnapshot();
  });

  it('should render when activeTab is \'Profile\'', () => {
    expect(renderHeader({ activeTab: 'Profile' }).toJSON()).toMatchSnapshot();
  });

  it('should render with no divider', () => {
    expect(renderHeader({ divider: false }).toJSON()).toMatchSnapshot();
  });

  it('should append returnUrl to signin and register links if present', () => {
    expect(renderHeader({ returnUrl: '/jobs' }).toJSON()).toMatchSnapshot();
  });
});
