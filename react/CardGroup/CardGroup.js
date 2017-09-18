import Card from '../Card/Card';
import React from 'react';
import PropTypes from 'prop-types';

export default function CardGroup({ className, children, transparent, ...restProps }) {
  return (
    <Card {...restProps} group className={className} transparent={transparent}>
      {children}
    </Card>
  );
}

CardGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool
};
