import styles from './TextField.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import ErrorIcon from '../../icons/ErrorIcon/ErrorIcon';

export default class TextField extends Component {

  static displayName = 'TextField';

  static propTypes = {
    className: PropTypes.string,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    labelProps: PropTypes.object,
    inputProps: PropTypes.object,
    help: PropTypes.string,
    helpProps: PropTypes.object,
    message: PropTypes.string,
    messageProps: PropTypes.object
  };

  static defaultProps = {
    className: '',
    invalid: false,
    label: '',
    labelProps: {},
    inputProps: {},
    help: '',
    helpProps: {},
    message: '',
    messageProps: {}
  };

  constructor() {
    super();

    this.storeInputReference = this.storeInputReference.bind(this);
  }

  storeInputReference(input) {
    if (input !== null) {
      this.input = input;
    }
  }

  render() {
    const {
      className, invalid, label, labelProps, inputProps,
      help, helpProps, message, messageProps
    } = this.props;
    const { className: inputClassName, ...remainingInputProps } = inputProps;

    return (
      <div className={classnames(styles.root, className, { [styles.invalid]: invalid })}>
        {
          label &&
            <label className={styles.label} {...labelProps}>
              {label}
            </label>
        }
        <input className={classnames(styles.input, inputClassName)} ref={this.storeInputReference} {...remainingInputProps} />
        {
          (!invalid && help) &&
            <p className={styles.help} {...helpProps}>
              {help}
            </p>
        }
        {
          message &&
            <p className={styles.message} {...messageProps}>
              {invalid && <ErrorIcon filled={true} className={styles.messageIcon} svgClassName={styles.messageIconSvg} />}
              {message}
            </p>
        }
      </div>
    );
  }

}
