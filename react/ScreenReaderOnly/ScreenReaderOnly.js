import styles from './ScreenReaderOnly.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class ScreenReaderOnly extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ])
  };

  static defaultProps = {
    component: 'span'
  };

  render() {
    const { component, children, ...restProps } = this.props;

    const combinedProps = {
      className: classnames(styles.root),
      ...restProps
    };
    return React.createElement(component, combinedProps, children);
  }
}
