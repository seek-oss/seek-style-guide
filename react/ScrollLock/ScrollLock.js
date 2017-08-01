import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactScrollLock from 'react-scrolllock';

export default class ScrollLock extends Component {

  static propTypes = {
    shouldLockBody: PropTypes.bool,
    shouldScrollInside: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    shouldLockBody: false,
    shouldScrollInside: true,
    children: null
  };

  storeContainerReference = container => {
    if (container !== null) {
      this.container = container;
    }
  }

  render() {
    const { shouldLockBody, shouldScrollInside, children } = this.props;

    return (
      <div ref={this.storeContainerReference}>
        {children}
        {shouldLockBody ? <ReactScrollLock scrollTarget={shouldScrollInside ? this.container : null} /> : null }
      </div>
    );
  }

}
