import styles from './TextField.less';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ClearField from '../ClearField/ClearField';
import FieldMessage from '../FieldMessage/FieldMessage';
import FieldLabel from '../FieldLabel/FieldLabel';
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
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    valid: PropTypes.bool,
    inputProps: PropTypes.object,
    onClear: PropTypes.func
  };

  static defaultProps = {
    className: '',
    inputProps: {}
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
    const { id, value, onChange, onFocus, onBlur, type, inputProps = {} } = this.props;
    const { ref } = inputProps;
    const allInputProps = {
      id,
      value,
      onChange,
      onFocus,
      onBlur,
      type,
      ...combineClassNames(inputProps, styles.input),
      ref: attachRefs(this.storeInputReference, ref),
      'aria-describedby': `${id}-message`
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
    const { id, value, className, valid, onClear, inputProps = {} } = this.props;
    const resolvedValue = value || inputProps.value || '';
    const hasValue = resolvedValue.length > 0;
    const canClear = hasValue && (typeof onClear === 'function');
    const classNames = classnames({
      [styles.root]: true,
      [styles.invalid]: valid === false,
      [styles.canClear]: canClear,
      [className]: className
    });

    // eslint-disable-next-line react/prop-types
    const { label, labelProps, secondaryLabel, tertiaryLabel, invalid, help, helpProps, message, messageProps } = this.props;

    return (
      <div ref={this.storeContainerReference} className={classNames}>
        <FieldLabel {...{ id, label, labelProps, secondaryLabel, tertiaryLabel }} />
        {this.renderInput()}
        {this.renderClear()}
        <FieldMessage {...{ id: `${id}-message`, invalid, help, helpProps, valid, message, messageProps }} />
      </div>
    );
  }
}
