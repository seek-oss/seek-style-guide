import React from 'react';
import { render } from 'react-dom';
import StandaloneProvider from './StandaloneProvider/StandaloneProvider';

export default (Component, defaultProps = {}) => (el, props) => {
  if (typeof Component.displayName !== 'string') {
    throw new Error('Component must have a display name');
  }

  let updateProps;

  const registerPropsUpdater = propsUpdater => {
    updateProps = propsUpdater;
  };

  const renderTarget = el || document.getElementById(`__SSG_${Component.displayName}__`);
  const initialProps = props || window[`__SSG_${Component.displayName}_props__`] || {};

  render(
    <StandaloneProvider
      component={Component}
      initialProps={{
        ...defaultProps,
        ...initialProps
      }}
      registerPropsUpdater={registerPropsUpdater}
    />,
    renderTarget
  );

  return { updateProps };
};
