import styles from './Button.less';
import brandStyles from './Button.css.js';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

const tenant = process.env.SKU_TENANT;
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
    isJobsDB: PropTypes.bool,
    isJobStreet: PropTypes.bool,
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool
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
    const { color, className, loading, fullWidth, children, component, ...restProps } = this.props;

    const combinedProps = {
      className: classnames(styles.root, className, {
        [styles.loading]: loading,
        [styles.fullWidth]: fullWidth,
        [styles.jobsDB]: isJobsDB,
        [styles.jobStreet]: isJobStreet,
        [styles.root_callToAction] : color === 'callToAction',            
        [styles.root_hyperlink]: color === 'hyperlink',
        [styles.root_completion]: color === 'completion',
        [styles.root_alert]: color === 'alert',
        [styles.root_highlight]: color === 'highlight',
        [styles.root_isTransparent]: color === 'transparent'
      }),
      disabled: loading,
      ref: this.storeButtonReference,
      ...restProps
    };

    return React.createElement(component, combinedProps, children);
  }

}
