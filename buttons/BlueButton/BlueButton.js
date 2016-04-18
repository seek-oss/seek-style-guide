import styles from './BlueButton.less';

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class BlueButton extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    loading: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    loading: false
  };

  render() {
    const { className, loading, children, ...props } = this.props;

    const combinedProps = {
      type: 'button',
      className: classNames(styles.root, className, {
        [styles.loading]: loading
      }),
      disabled: loading,
      ...props
    };

    return (
      <button {...combinedProps}>
        { children }
      </button>
    );
  }

}
