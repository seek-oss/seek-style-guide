import React from 'react';
import PropTypes from 'prop-types';

import omit from 'lodash/omit';

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

const withTextProps = () => OriginalComponent => {
  const DecoratedComponent = props => {
    const newProps = {
      ...getSizeProps(props),
      ...omit(props, sizes)
    };

    return <OriginalComponent {...newProps} />;
  };

  DecoratedComponent.displayName = OriginalComponent.displayName;

  return DecoratedComponent;
};

export default withTextProps;
