import styles from './Button.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default class Button extends Component {

  static displayName = 'Button';

  static propTypes = {
    color: PropTypes.oneOf([
      'pink', 'blue', 'gray', 'transparent'
    ]).isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),
    loading: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    loading: false,
    component: 'button'
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
    const { color, className, loading, children, component, ...restProps } = this.props;

    const combinedProps = {
      className: classnames(styles.root, className, {
        [styles.loading]: loading,
        [styles.root_isPink]: color === 'pink',
        [styles.root_isBlue]: color === 'blue',
        [styles.root_isGray]: color === 'gray',
        [styles.root_isTransparent]: color === 'transparent'
      }),
      disabled: loading,
      ref: this.storeButtonReference,
      ...restProps
    };

    return React.createElement(component, combinedProps, children);
  }

}
