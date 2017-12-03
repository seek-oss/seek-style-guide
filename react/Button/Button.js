import styles from './Button.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import capitalize from 'lodash/capitalize';

export default class Button extends Component {
  static displayName = 'Button';

  static propTypes = {
    color: PropTypes.oneOf([
      'pink', 'blue', 'gray', 'transparent', 'white'
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
    ghost: PropTypes.bool,
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    ghost: false,
    loading: false,
    fullWidth: false,
    component: 'button'
  };

  storeButtonReference = button => {
    if (button !== null) {
      this.button = button;
    }
  }

  render() {
    const { color, ghost, className, loading, fullWidth, children, component, ...restProps } = this.props;

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
