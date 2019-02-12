// @flow
import styles from './TextField.less';
import classnames from 'classnames';
import React, { Component } from 'react';
import ClearField from '../ClearField/ClearField';
import FieldMessage from '../FieldMessage/FieldMessage';
import FieldLabel from '../FieldLabel/FieldLabel';
import invoke from 'lodash/invoke';
import { TONE } from '../private/tone';
import attachRefs from '../private/attachRefs';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

type ComponentProps = {
  id: string,
  value: string,
  onChange: Function,
  onFocus?: Function,
  onBlur?: Function,
  type?: string,
  className?: string,
  valid?: boolean,
  inputProps?: Object,
  onClear?: Function
};

type FieldLabelProps = {
  label?: string,
  labelProps?: Object,
  secondaryLabel?: string,
  tertiaryLabel?: React$Node
};

type FieldMessageProps = {
  message?: false | Node | string,
  invalid?: boolean,
  help?: string,
  helpProps?: Object,
  tone?: 'positive' | 'critical' | 'neutral',
  messageProps?: Object
};

type Props = ComponentProps & FieldLabelProps & FieldMessageProps;

export default class TextField extends Component<Props> {
  static displayName = 'TextField';

  static defaultProps = { className: '', inputProps: {} };

  container: React$ElementRef<'div'>;
  input: React$ElementRef<'input'>;

  storeContainerReference = (textField: ?React$ElementRef<'div'>): void => {
    if (textField && textField !== null) {
      this.container = textField;
    }
  };

  storeInputReference = (input: React$ElementRef<'input'>): void => {
    if (input !== null) {
      this.input = input;
    }
  };

  handleMouseDownOnClear = (event: Event): void => {
    event.preventDefault(); // https://developer.mozilla.org/en/docs/Web/API/HTMLElement/focus#Notes
    invoke(this.props, 'onClear', event);
    this.input.focus();
  };

  renderInput = () => {
    const {
      id,
      value,
      onChange,
      onFocus,
      onBlur,
      type,
      inputProps = {}
    } = this.props;
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

    return <input {...allInputProps} />;
  };

  renderClear() {
    return (
      <span
        className={styles.clearField}
        onMouseDown={this.handleMouseDownOnClear}
      >
        <ClearField />
      </span>
    );
  }

  render() {
    const {
      id,
      value,
      className,
      tone,
      onClear,
      inputProps = {},
      valid
    } = this.props;
    const resolvedValue = value || inputProps.value || '';
    const hasValue = resolvedValue.length > 0;
    const canClear = hasValue && typeof onClear === 'function';
    const classNames = classnames({
      [styles.root]: true,
      [styles.invalid]:
        typeof tone !== 'undefined' ? tone === TONE.CRITICAL : valid === false,
      [styles.canClear]: canClear,
      ...(className ? { [className]: className } : {})
    });

    const {
      label,
      labelProps,
      secondaryLabel,
      tertiaryLabel,
      invalid,
      help,
      helpProps,
      message,
      messageProps
    } = this.props;

    return (
      <div ref={this.storeContainerReference} className={classNames}>
        <FieldLabel
          {...{ id, label, labelProps, secondaryLabel, tertiaryLabel }}
        />
        {this.renderInput()}
        {this.renderClear()}
        <FieldMessage
          {...{
            id: `${id}-message`,
            invalid,
            help,
            helpProps,
            tone,
            ...(tone ? {} : { valid }),
            message,
            messageProps
          }}
        />
      </div>
    );
  }
}
