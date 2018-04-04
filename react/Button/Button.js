import styles from './Button.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import capitalize from 'lodash/capitalize';

const tenant = process.env.APP_TENANT;
const isJobStreet = tenant === 'jobStreet';
const isJobsDB = tenant === 'jobsDB';

export default class Button extends Component {
  static displayName = 'Button';

  static propTypes = {
    color: PropTypes.oneOf([
      'callToAction', 'hyperlink', 'completion', 'alert', 'highlight', 'transparent', 'secondary'
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
    isJobsDB: PropTypes.bool,
    isJobStreet: PropTypes.bool,
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool,
    inverse: PropTypes.bool,
    compact: PropTypes.bool,
    disabled: PropTypes.bool
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
    const { color, inverse, compact, ghost, className, loading, fullWidth, children, component, disabled, ...restProps } = this.props;

    const combinedProps = {
      className: classnames(styles.root, className, {
        [styles.loading]: loading,
        [styles.compact]: compact,
        [styles.fullWidth]: fullWidth,
        [styles.jobsDB]: isJobsDB,
        [styles.jobStreet]: isJobStreet,
        [styles.root_callToAction]: color === 'callToAction' && !disabled,
        [styles.root_hyperlink]: color === 'hyperlink' && !disabled,
        [styles.root_completion]: color === 'completion' && !disabled,
        [styles.root_alert]: color === 'alert' && !disabled,
        [styles.root_highlight]: color === 'highlight' && !disabled,
        [styles.root_isTransparent]: color === 'transparent' && !disabled,
        [styles.root_isInverse]: inverse && color !== 'transparent' && !disabled,
        [styles.root_isGhost]: ghost && !inverse && color !== 'transparent' && !disabled,
        [styles.disabled]: disabled,
        [styles[`root_is${capitalize(color)}`]]: color && !disabled,
        [styles.root_secondary]: color === 'secondary' && !disabled,
      }),
      disabled: loading,
      ref: this.storeButtonReference,
      ...restProps
    };

    return React.createElement(component, combinedProps, children);
  }
}
