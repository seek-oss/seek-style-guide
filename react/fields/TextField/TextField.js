import styles from './TextField.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import ErrorIcon from '../../icons/ErrorIcon/ErrorIcon';

export default class TextField extends Component {

  static displayName = 'TextField';

  static propTypes = {
    className: PropTypes.string,
    inputProps: PropTypes.object,
    invalid: PropTypes.bool,
    message: PropTypes.string,
    label: PropTypes.string,
    help: PropTypes.string
  };

  static defaultProps = {
    className: '',
    inputProps: {},
    invalid: false,
    message: '',
    label: '',
    help: ''
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
    const { className, invalid, message, label, help, inputProps, ...props } = this.props;
    const { className: inputClassName, ...remainingInputProps } = inputProps;

    return (
      <div className={classnames(styles.root, className, { [styles.invalid]: invalid })} {...props}>
        {
          label &&
            <label className={styles.label}>
              {label}
            </label>
        }
        <input className={classnames(styles.input, inputClassName)} ref={this.storeInputReference} {...remainingInputProps} />
        {
          help &&
            <p className={styles.help}>
              {help}
            </p>
        }
        {
          invalid &&
            <p className={styles.message} data-automation="textfield-invalid-message">
              { message && <ErrorIcon filled={true} className={styles.messageIcon} svgClassName={styles.messageIconSvg} /> }
              { message }
            </p>
        }
      </div>
    );
  }

}
