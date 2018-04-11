import styles from './TextField.less';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ClearField from '../ClearField/ClearField';

import FieldMessage from '../private/FieldMessage/FieldMessage';
import FieldLabel from '../private/FieldLabel/FieldLabel';

import invoke from 'lodash/invoke';

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
      const { id } = props;

      if (typeof id !== 'string') {
        return new Error(`Invalid prop \`id\` of type \`${typeof id}\` supplied to \`${componentName}\`, expected \`string\`.`);
      }
    },
    /* eslint-enable consistent-return */
    className: PropTypes.string,
    valid: PropTypes.bool,
    /* eslint-disable consistent-return */
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
    /* eslint-enable consistent-return */
    onClear: PropTypes.func
  };

  static defaultProps = {
    id: '',
    className: ''
  };

  constructor() {
    super();

    this.storeInputReference = this.storeInputReference.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.handleMouseDownOnClear = this.handleMouseDownOnClear.bind(this);
  }

  storeContainerReference = textField => {
    if (textField !== null) {
      this.container = textField;
    }
  }

  storeInputReference(input) {
    if (input !== null) {
      this.input = input;
    }
  }

  handleMouseDownOnClear(event) {
    event.preventDefault(); // https://developer.mozilla.org/en/docs/Web/API/HTMLElement/focus#Notes
    invoke(this.props, 'onClear', event);
    this.input.focus();
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
        onMouseDown={this.handleMouseDownOnClear}>
        <ClearField />
      </span>
    );
  }

  render() {
    const { className, valid, onClear, inputProps = {} } = this.props;
    const hasValue = (inputProps.value && inputProps.value.length > 0);
    const canClear = hasValue && (typeof onClear === 'function');
    const classNames = classnames({
      [styles.root]: true,
      [styles.invalid]: valid === false,
      [styles.canClear]: canClear,
      [className]: className
    });

    // eslint-disable-next-line react/prop-types
    const { id, label, labelProps, secondaryLabel, tertiaryLabel, invalid, help, helpProps, message, messageProps } = this.props;

    return (
      <div ref={this.storeContainerReference} className={classNames}>
        <FieldLabel {...{ id, label, labelProps, secondaryLabel, tertiaryLabel }} />
        {this.renderInput()}
        {this.renderClear()}
        <FieldMessage {...{ invalid, help, helpProps, valid, message, messageProps }} />
      </div>
    );
  }
}
