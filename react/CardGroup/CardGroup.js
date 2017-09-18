import Card from '../Card/Card';
import React from 'react';
import PropTypes from 'prop-types';

export default function CardGroup({ children, ...restProps }) {
  return (
    <Card {...restProps} group>
      {children}
    </Card>
  );
}

CardGroup.propTypes = {
  children: PropTypes.node.isRequired
};
