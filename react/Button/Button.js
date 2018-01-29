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
      'callToAction', 'hyperlink', 'completion', 'alert', 'highlight', 'transparent',
      'blue', 'pink'
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
        [styles.jobsDB]: isJobsDB,
        [styles.jobStreet]: isJobStreet,
        [styles.root_callToAction]: color === 'callToAction',
        [styles.root_hyperlink]: color === 'hyperlink',
        [styles.root_completion]: color === 'completion',
        [styles.root_alert]: color === 'alert',
        [styles.root_highlight]: color === 'highlight',
        [styles.root_isTransparent]: color === 'transparent',
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
