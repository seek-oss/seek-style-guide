import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const DummyLinkRenderer = ({ href, ...props }) => (
  <a {...props} />
);

DummyLinkRenderer.propTypes = {
  href: PropTypes.string
};

export const blockSymbols = {
  'Header/Australia/Unauthenticated': <Header linkRenderer={DummyLinkRenderer} authenticationStatus="unauthenticated" />,
  'Header/Australia/Authenticated': <Header linkRenderer={DummyLinkRenderer} authenticationStatus="authenticated" userName="Olivia" />,
  'Header/New Zealand/Unauthenticated': <Header locale="NZ" linkRenderer={DummyLinkRenderer} authenticationStatus="unauthenticated" />,
  'Header/New Zealand/Authenticated': <Header locale="NZ" linkRenderer={DummyLinkRenderer} authenticationStatus="authenticated" userName="Olivia" />
};
