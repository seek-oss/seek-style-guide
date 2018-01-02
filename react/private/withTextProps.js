import React from 'react';
import PropTypes from 'prop-types';

import omit from 'lodash/omit';
import forEach from 'lodash/forEach';

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

const getBooleanSizes = () => {
  const booleanProps = {};

  forEach(sizes, size => booleanProps[size]: PropTypes.bool);
};

export const SizePropTypes = {
  size: PropTypes.oneOf(sizes),
  ...getBooleanSizes()
};

const parseBooleanSize = props => {
  const sizeProps = {};

  sizes.forEach(size => {
    if (props[size]) {
      sizeProps.size = size;
    }
  });

  return sizeProps;
};

const withTextProps = OriginalComponent => {
  const DecoratedComponent = props => {
    const newProps = {
      ...parseBooleanSize(props),
      ...omit(props, sizes)
    };

    return <OriginalComponent {...newProps} />;
  };

  DecoratedComponent.displayName = OriginalComponent.displayName;

  return DecoratedComponent;
};

export default withTextProps;
