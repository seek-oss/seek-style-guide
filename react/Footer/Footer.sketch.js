import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';

const DummyLinkRenderer = ({ href, ...props }) => (
  <a {...props} />
);

DummyLinkRenderer.propTypes = {
  href: PropTypes.string
};

export const blockSymbols = {
  'Footer/Australia': <Footer linkRenderer={DummyLinkRenderer} />,
  'Footer/New Zealand': <Footer locale="NZ" linkRenderer={DummyLinkRenderer} />
};
