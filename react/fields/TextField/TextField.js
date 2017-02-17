import styles from './TextField.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import ErrorIcon from '../../icons/ErrorIcon/ErrorIcon';
import TickCircleIcon from '../../icons/TickCircleIcon/TickCircleIcon';

import ClearField from './ClearField/ClearField';

import Text from '../../Text/Text';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

const attachRefs = (...refs) => ref => {
  refs.forEach(callRef => {
    if (typeof callRef === 'function') {
      callRef(ref);
    }
  });
};

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
    valid: PropTypes.bool,
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
    message: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.oneOf([false])
    ]),
    messageProps: PropTypes.object,
    onClear: PropTypes.func
  };

  static defaultProps = {
    id: '',
    className: '',
    label: '',
    message: '',
    messageProps: {
      critical: false,
      positive: false,
      secondary: false
    }
  };

  constructor() {
    super();

    this.storeInputReference = this.storeInputReference.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.renderMessageIcon = this.renderMessageIcon.bind(this);
    this.handleMouseDownOnClear = this.handleMouseDownOnClear.bind(this);
  }

  storeInputReference(input) {
    if (input !== null) {
      this.input = input;
    }
  }

  handleMouseDownOnClear(event) {
    const { onClear } = this.props;

    if (typeof onClear === 'function') {
      onClear(event);
      this.input.focus();
      event.preventDefault(); // https://developer.mozilla.org/en/docs/Web/API/HTMLElement/focus#Notes
    }
  }

  renderLabel() {
    const { label } = this.props;

    if (!label) {
      return;
    }

    const { labelProps, id } = this.props;
    const allLabelProps = {
      ...combineClassNames(labelProps, styles.label),
      ...(id ? { htmlFor: id } : {})
    };

    return (
      <label {...allLabelProps}>
        {label}
      </label>
    );
  }

  renderInput() {
    const { inputProps = {}, id } = this.props;
    const { ref } = inputProps;
    const allInputProps = {
      ...combineClassNames(inputProps, styles.input),
      ...(id ? { id } : {}),
      ref: attachRefs(this.storeInputReference, ref)
    };

    return (
      <input {...allInputProps} />
    );
  }

  renderClear() {
    return (
      <span
        className={styles.clearField}
        onMouseDown={this.handleMouseDownOnClear}
        onTouchStart={this.handleMouseDownOnClear}>
        <ClearField />
      </span>
    );
  }

  renderMessage() {
    const { message, valid } = this.props;

    if (!message) {
      return;
    }

    const { critical, positive, secondary, ...restMessageProps } = this.props.messageProps;
    const allMessageProps = combineClassNames(restMessageProps, styles.message);

    return (
      <Text
        {...allMessageProps}
        critical={(valid === false && !secondary) || critical}
        positive={(valid === true && !secondary) || positive}
        secondary={typeof valid === 'undefined' || secondary}>
        {this.renderMessageIcon()}
        {message}
      </Text>
    );
  }

  renderMessageIcon() {
    const { valid } = this.props;

    if (valid === false) {
      return (
        <ErrorIcon
          filled={true}
          className={styles.messageIcon}
          svgClassName={styles.messageIconSvg}
        />
      );
    }

    if (valid === true) {
      return (
        <TickCircleIcon
          filled={true}
          className={styles.messageIcon}
          svgClassName={styles.messageIconSvg}
        />
      );
    }

    return null;
  }

  render() {
    const { className, valid, message, onClear, inputProps = {} } = this.props;
    const hasValue = (inputProps.value && inputProps.value.length > 0);
    const canClear = hasValue && (typeof onClear === 'function');
    const classNames = classnames({
      [styles.root]: true,
      [styles.noMarginBottom]: message || message === false,
      [styles.invalid]: valid === false,
      [styles.canClear]: canClear,
      [className]: className
    });

    return (
      <div className={classNames}>
        {this.renderLabel()}
        {this.renderInput()}
        {this.renderClear()}
        {this.renderMessage()}
      </div>
    );
  }

}
