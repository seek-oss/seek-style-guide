import styles from './PrintVisibilityWrapper.less';
import classNames from 'classnames';

import React, { Component, PropTypes } from 'react';

export default class PrintVisibilityWrapper extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    isScreenOnly: PropTypes.bool,
    isPrintOnly: PropTypes.bool,
  };

  static defaultProps = {
    isScreenOnly: false,
    isPrintOnly: false,
  };

  render() {
    const { isScreenOnly, isPrintOnly, children } = this.props;

    return (
      <span
        className={classNames({
          [styles.isScreenOnly]: isScreenOnly,
          [styles.isPrintOnly]: isPrintOnly,
        })}
      >
        { children }
      </span>
    );
  }
}
