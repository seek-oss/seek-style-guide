import React from 'react';
import omit from 'lodash/omit';

const withTextProps = () => WrappedComponent => {
  return props => {
    const newProps = {
      ...omit(props, 'size'),
      heading: props.size === 'heading' || props.heading
    };

    return <WrappedComponent {...newProps} />;
  };
};

export default withTextProps;
