import styles from './ScreenReaderSkipLink.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ScreenReaderSkipLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    return <a className={styles.root} href={`#${this.props.to}`}>{ this.props.children }</a>;
  }
}
