import React from 'react';
import PropTypes from 'prop-types';

const SketchFieldContainer = ({ children }) => (
  <div style={{ maxWidth: '520px' }}>{children}</div>
);
SketchFieldContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default SketchFieldContainer;
