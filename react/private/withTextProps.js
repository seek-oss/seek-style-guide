import React from 'react';

const sizes = [
  'small',
  'substandard',
  'superstandard',
  'subheading',
  'headline',
  'heading',
  'hero'
];
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
