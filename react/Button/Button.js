import styles from './Button.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default class Button extends Component {

  static displayName = 'Button';

  static propTypes = {
    /* eslint-disable consistent-return */
    color: (props, propName, componentName) => {
      if (!props.group && ['pink', 'blue', 'gray', 'transparent'].indexOf(props.color) === -1) {
        return new Error(`When ${componentName} doesn't not have \`group\`, it should have an \`color\`.`);
      }
    },
    /* eslint-enable consistent-return */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool,
    group: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    loading: false,
    fullWidth: false,
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
    const { color, className, loading, fullWidth, children, component, group, ...restProps } = this.props;

    if (group) {
      return <div className={styles.group}>{children}</div>;
    }

    const combinedProps = {
      className: classnames(styles.root, className, {
        [styles.loading]: loading,
        [styles.fullWidth]: fullWidth,
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
