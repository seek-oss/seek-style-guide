import styles from './Button.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Button extends Component {

  static displayName = 'Button';

  static propTypes = {
    color: PropTypes.oneOf([
      'pink', 'blue', 'gray'
    ]).isRequired,
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

  constructor() {
    super();

    this.storeButtonReference = this.storeButtonReference.bind(this);
  }

  storeButtonReference(button) {
    if (button !== null) {
      this.button = button;
    }
  }

  render() {
    const { color, className, loading, children, ...restProps } = this.props;

    const combinedProps = {
      type: 'button',
      className: classnames(styles.root, className, {
        [styles.loading]: loading,
        [styles.root_isPink]: color === 'pink',
        [styles.root_isBlue]: color === 'blue',
        [styles.root_isGray]: color === 'gray'
      }),
      disabled: loading,
      ref: this.storeButtonReference,
      ...restProps
    };

    return (
      <button {...combinedProps}>
        {children}
      </button>
    );
  }

}
