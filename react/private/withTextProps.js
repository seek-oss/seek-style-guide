import React from 'react';
import omit from 'lodash/omit';

const sizes = ['small', 'substandard', 'superstandard', 'subheading', 'headline', 'heading', 'hero'];
const getSizeProps = props => {
  const sizeProps = {};

  sizes.forEach(size => {
    sizeProps[size] = props.size === size || props[size];
    return;
  });

  return sizeProps;
};

const withTextProps = () => WrappedComponent => {
  return props => {
    const newProps = {
      ...omit(props, 'size'),
      ...getSizeProps(props)
    };

    return <WrappedComponent {...newProps} />;
  };
};

export default withTextProps;
