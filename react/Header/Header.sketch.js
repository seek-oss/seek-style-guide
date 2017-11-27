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
  'Header/AU/Unauthenticated': <Header linkRenderer={DummyLinkRenderer} authenticationStatus="unauthenticated" />,
  'Header/AU/Authenticated': <Header linkRenderer={DummyLinkRenderer} authenticationStatus="authenticated" userName="Olivia" />,
  'Header/NZ/Unauthenticated': <Header locale="NZ" linkRenderer={DummyLinkRenderer} authenticationStatus="unauthenticated" />,
  'Header/NZ/Authenticated': <Header locale="NZ" linkRenderer={DummyLinkRenderer} authenticationStatus="authenticated" userName="Olivia" />
};
