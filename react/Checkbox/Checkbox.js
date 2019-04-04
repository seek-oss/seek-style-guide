import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.less';
import CheckMarkIcon from '../CheckMarkIcon/CheckMarkIcon';
import classnames from 'classnames';
import FieldMessage from '../FieldMessage/FieldMessage';
import Text from '../Text/Text';
import { TONE } from '../private/tone';

export const STANDARD = 'standard';
export const BUTTON = 'button';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

export default class Checkbox extends Component {
  static displayName = 'Checkbox';

  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    inputProps: PropTypes.object,
    type: PropTypes.oneOf([STANDARD, BUTTON]),
    valid: PropTypes.bool,
    message: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.node]),
    messageProps: PropTypes.object,
    tone: PropTypes.oneOf([
      TONE.POSITIVE,
      TONE.INFO,
      TONE.CRITICAL,
      TONE.NEUTRAL
    ])
  };

  static defaultProps = {
    className: '',
    checked: false,
    inputProps: {},
    type: STANDARD
  };

  renderButton(label) {
    return (
      <Text
        component="span"
        baseline={false}
        raw={true}
        className={styles.button}
      >
        {label}
      </Text>
    );
  }

  renderStandard(label) {
    return (
      <Fragment>
        <div className={styles.checkbox}>
          <CheckMarkIcon
            className={styles.checkMark}
            svgClassName={classnames(
              styles.checkMarkSvg,
              styles.checkMarkSvg_isHover
            )}
          />
          <CheckMarkIcon
            svgClassName={classnames(
              styles.checkMarkSvg,
              styles.checkMarkSvg_isSelected
            )}
            className={styles.checkMark}
          />
        </div>
        <Text
          component="span"
          baseline={false}
          raw={true}
          className={styles.labelText}
        >
          {label}
        </Text>
      </Fragment>
    );
  }

  renderLabel() {
    const { id, label, type } = this.props;

    return (
      <label htmlFor={id} className={styles.label}>
        {type === STANDARD
          ? this.renderStandard(label)
          : this.renderButton(label)}
      </label>
    );
  }

  renderMessage(id, valid, message, messageProps, tone) {
    return (
      <FieldMessage
        {...{
          id: `${id}-message`,
          message,
          messageProps,
          tone,
          ...(tone ? {} : { valid })
        }}
      />
    );
  }

  renderInput() {
    const {
      id,
      value,
      checked,
      onChange,
      onFocus,
      onBlur,
      inputProps,
      type
    } = this.props;

    const allInputProps = {
      id,
      value,
      checked,
      onChange,
      onFocus,
      onBlur,
      ...combineClassNames(inputProps, {
        [styles.input]: true,
        [styles.input_isCheckbox]: type === STANDARD,
        [styles.input_isButton]: type === BUTTON
      }),
      type: 'checkbox'
    };

    return <input {...allInputProps} />;
  }

  render() {
    const { className, id, valid, message, messageProps, tone } = this.props;

    const rootClassNames = classnames({
      [styles.root]: true,
      [styles.invalid]:
        typeof tone !== 'undefined' ? tone === TONE.CRITICAL : valid === false,
      [className]: className
    });

    return (
      <div className={rootClassNames}>
        {this.renderInput()}
        {this.renderLabel()}
        {this.renderMessage(id, valid, message, messageProps, tone)}
      </div>
    );
  }
}
