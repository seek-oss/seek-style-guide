import React from 'react';
import PropTypes from 'prop-types';

export const sizes = [
  'small',
  'substandard',
  'superstandard',
  'standard',
  'subheading',
  'headline',
  'heading',
  'hero'
];

export const SizePropTypes = PropTypes.oneOf(sizes);

const getSizeProps = props => {
  const sizeProps = {};

  sizes.forEach(size => {
    if (props.size) {
      sizeProps[size] = props.size === size || props[size];
    } else {
      sizeProps.size = props[size] ? size : sizeProps.size;
    }

    return;
  });

  return sizeProps;
};

const withTextProps = () => WrappedComponent => {
  return props => {
    const newProps = {
      ...props,
      ...getSizeProps(props)
    };

    return <WrappedComponent {...newProps} />;
  };
};

export default withTextProps;
