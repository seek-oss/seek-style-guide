import styles from './TextField.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import ErrorIcon from '../../icons/ErrorIcon/ErrorIcon';

export default class TextField extends Component {

  static displayName = 'TextField';

  static propTypes = {
    /* eslint-disable consistent-return */
    id: (props, propName, componentName) => {
      const { id, label } = props;

      if (typeof id !== 'string') {
        return new Error(`Invalid prop \`id\` of type \`${typeof id}\` supplied to \`${componentName}\`, expected \`string\`.`);
      }

      if (label && !id) {
        return new Error(`When ${componentName} has a \`label\`, it should also have an \`id\`.`);
      }
    },
    /* eslint-enable consistent-return */
    className: PropTypes.string,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    /* eslint-disable consistent-return */
    labelProps: (props, propName, componentName) => {
      const { id, label, labelProps } = props;
      const { htmlFor: labelFor } = labelProps || {};

      if (typeof labelProps !== 'undefined' && typeof labelProps !== 'object') {
        return new Error(`Invalid prop \`labelProps\` of type \`${typeof labelProps}\` supplied to \`${componentName}\`, expected \`object\`.`);
      }

      if (!label && labelProps) {
        return new Error(`Specifying \`labelProps\` is redundant when \`label\` is not specified in ${componentName}.`);
      }

      if (labelFor && id) {
        return new Error(`\`labelProps.htmlFor\` will be overridden by \`id\` in ${componentName}. Please remove it.`);
      }
    },
    inputProps: (props, propName, componentName) => {
      const { id, inputProps } = props;
      const { id: inputId } = inputProps || {};

      if (typeof inputProps !== 'undefined' && typeof inputProps !== 'object') {
        return new Error(`Invalid prop \`inputProps\` of type \`${typeof inputProps}\` supplied to \`${componentName}\`, expected \`object\`.`);
      }

      if (inputId && id) {
        return new Error(`\`inputProps.id\` will be overridden by \`id\` in ${componentName}. Please remove it.`);
      }
    },
    /* eslint-disable consistent-return */
    help: PropTypes.string,
    helpProps: PropTypes.object,
    message: PropTypes.string,
    messageProps: PropTypes.object
  };

  static defaultProps = {
    id: '',
    className: '',
    invalid: false,
    label: '',
    help: '',
    message: ''
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
      id, className, invalid, label, labelProps = {}, inputProps = {},
      help, helpProps = {}, message, messageProps = {}
    } = this.props;
    const { className: inputClassName, ...remainingInputProps } = inputProps;

    return (
      <div className={classnames(styles.root, className, { [styles.invalid]: invalid })}>
        {
          label ?
            <label className={styles.label} {...labelProps} htmlFor={id || null}>
              {label}
            </label> :
            null
        }
        <input className={classnames(styles.input, inputClassName)} ref={this.storeInputReference} {...remainingInputProps} id={id} />
        {
          (!invalid && help) ?
            <p className={styles.help} {...helpProps}>
              {help}
            </p> :
            null
        }
        {
          message ?
            <p className={styles.message} {...messageProps}>
              {
                invalid ?
                  <ErrorIcon
                    filled={true}
                    className={styles.messageIcon}
                    svgClassName={styles.messageIconSvg}
                  /> :
                  null
              }
              {message}
            </p> :
            null
        }
      </div>
    );
  }

}
