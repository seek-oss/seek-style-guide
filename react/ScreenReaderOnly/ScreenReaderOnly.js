import styles from './ScreenReaderOnly.less';

import React, { Component, PropTypes } from 'react';

export default class ScreenReaderOnly extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    return (
      <span className={styles.root}>{ this.props.children }</span>
    );
  }

}
