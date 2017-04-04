import React from 'react';
import { render } from 'react-dom';
import StandaloneProvider from './StandaloneProvider/StandaloneProvider';

export default Component => (el, initialProps) => {
  let updateProps;

  const registerPropsUpdater = propsUpdater => {
    updateProps = propsUpdater;
  };

  render(
    <StandaloneProvider
      component={Component}
      initialProps={initialProps}
      registerPropsUpdater={registerPropsUpdater}
    />
  , el);

  return { updateProps };
};
