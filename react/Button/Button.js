import styles from './Button.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import capitalize from 'lodash/capitalize';

import { isJobsDB, isJobStreet } from '../private/tenant';

export default class Button extends Component {
  static displayName = 'Button';

  static propTypes = {
    color: PropTypes.oneOf([
      'callToAction', 'primary', 'secondary', 'hyperlink'
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
    isJobsDB: PropTypes.bool,
    isJobStreet: PropTypes.bool,
    compact: PropTypes.bool,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    component: 'button'
  };

  storeButtonReference = button => {
    if (button !== null) {
      this.button = button;
    }
  }

  render() {
    const { color, compact, className, children, component, disabled, isJobsDB, isJobStreet, ...restProps } = this.props;

    const combinedProps = {
      className: classnames(styles.root, className, {
        [styles.compact]: compact,
        [styles.jobsDB]: isJobsDB,
        [styles.jobStreet]: isJobStreet,
        [styles.root_callToAction]: color === 'callToAction' ,
        [styles.root_primary]: color === 'primary' ,
        [styles.root_secondary]: color === 'secondary' ,
        [styles.root_hyperlink]: color === 'hyperlink' ,
        [styles.disabled]: disabled,
      }),
      ref: this.storeButtonReference,
      ...restProps
    };

    return React.createElement(component, combinedProps, children);
  }
}
