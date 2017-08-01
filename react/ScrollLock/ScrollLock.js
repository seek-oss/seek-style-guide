import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactScrollLock from 'react-scrolllock';

export default class ScrollLock extends Component {

  static propTypes = {
    shouldLockBody: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    shouldLockBody: false,
    children: null
  };

  storeContainerReference = container => {
    if (container !== null) {
      this.container = container;
    }
  }

  render() {
    const { shouldLockBody, children } = this.props;

    return (
      <div ref={this.storeContainerReference}>
        {children}
        {shouldLockBody ? <ReactScrollLock scrollTarget={this.container} /> : null }
      </div>
    );
  }

}
