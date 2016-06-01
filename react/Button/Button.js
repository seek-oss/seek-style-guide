import styles from './Button.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Button extends Component {

  static displayName = 'Button';

  static propTypes = {
    colour: PropTypes.oneOf([
      'pink', 'blue'
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

  render() {
    const { colour, className, loading, children, ...props } = this.props;

    const combinedProps = {
      type: 'button',
      className: classnames(styles.root, className, {
        [styles.loading]: loading,
        [styles.root_isPink]: colour === 'pink',
        [styles.root_isBlue]: colour === 'blue'
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
