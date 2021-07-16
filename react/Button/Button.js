/* eslint-disable react/prop-types */
import styles from './Button.less';
import React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import capitalize from 'lodash/capitalize';
export default class Button extends Component {
  static displayName = 'Button';

  static defaultProps = {
    className: '',
    ghost: false,
    loading: false,
    fullWidth: false,
    component: 'button'
  };

  render() {
    const {
      color,
      ghost,
      className,
      loading,
      fullWidth,
      children,
      component = 'button',
      ...restProps
    } = this.props;

    const combinedProps = {
      className: classnames(styles.root, className, {
        [styles.loading]: loading,
        [styles.fullWidth]: fullWidth,
        [styles.root_isGhost]: ghost && color !== 'transparent',
        [styles[`root_is${capitalize(color)}`]]: color
      }),
      disabled: loading,
      ...restProps
    };

    return React.createElement(component, combinedProps, children);
  }
}
