import styles from './ScreenReaderSkipTarget.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ScreenReaderSkipTarget extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    return (
      <div tabIndex="-1" className={styles.root} id={this.props.name}>
        {this.props.children}
      </div>
    );
  }
}
