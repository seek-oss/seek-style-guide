// @flow

import styles from './Button.less';

import React from 'react';
import { Component } from 'react';

import classnames from 'classnames';
import capitalize from 'lodash/capitalize';

type Props = {
  color: 'pink' | 'blue' | 'gray' | 'transparent' | 'white',
  children: React$Node,
  className?: string,
  component?: string | Function,
  ghost?: boolean,
  loading?: boolean,
  fullWidth?: boolean
};

export default class Button extends Component<Props> {
  static displayName = 'Button';
  button: ?HTMLElement;
  props: Props;

  storeButtonReference = (button: ?HTMLElement) => {
    if (button !== null) {
      this.button = button;
    }
  };

  render() {
    const {
      color,
      ghost = false,
      className = '',
      loading = false,
      fullWidth = false,
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
      ref: this.storeButtonReference,
      ...restProps
    };

    return React.createElement(component, combinedProps, children);
  }
}
