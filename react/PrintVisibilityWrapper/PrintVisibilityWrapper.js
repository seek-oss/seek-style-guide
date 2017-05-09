import styles from './PrintVisibilityWrapper.less';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class PrintVisibilityWrapper extends PureComponent {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    isScreenOnly: PropTypes.bool,
    isPrintOnly: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    isScreenOnly: false,
    isPrintOnly: false,
  };

  render() {
    const { className, isScreenOnly, isPrintOnly, children } = this.props;

    return (
      <div
        className={classNames(
          className,
          {
            [styles.isScreenOnly]: isScreenOnly,
            [styles.isPrintOnly]: isPrintOnly,
          }
        )}
      >
        { children }
      </div>
    );
  }
}
