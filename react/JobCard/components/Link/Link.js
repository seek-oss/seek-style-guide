import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ link, children, ...restProps }) => {
  return (<a href={link} {...restProps}>{children}</a>);
};

export default Link;
Link.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node
};
