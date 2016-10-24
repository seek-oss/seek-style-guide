import styles from './MonthPicker.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import ErrorIcon from '../../icons/ErrorIcon/ErrorIcon';
import CustomMonthPicker from './CustomMonthPicker/CustomMonthPicker';
import NativeMonthPicker from './NativeMonthPicker/NativeMonthPicker';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

export default class MonthPicker extends Component {

  static displayName = 'MonthPicker';

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
    className: PropTypes.string,
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
    message: PropTypes.string,
    messageProps: PropTypes.object,
    monthValue: PropTypes.number,
    yearValue: PropTypes.number,
    native: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    id: '',
    className: '',
    invalid: false,
    label: '',
    message: '',
    native: false
  };

  constructor() {
    super();

    this.renderLabel = this.renderLabel.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
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
    const { inputProps = {}, id, monthValue, yearValue, onChange, native, invalid } = this.props;
    const allInputProps = {
      ...combineClassNames(inputProps, styles.input),
      ...(id ? { id } : {}),
      monthValue,
      yearValue,
      onChange,
      invalid
    };

    return (
      native ?
        <NativeMonthPicker {...allInputProps} /> :
        <CustomMonthPicker {...allInputProps} />
    );
  }

  renderMessage() {
    const { message } = this.props;

    if (!message) {
      return;
    }

    const { messageProps } = this.props;
    const allMessageProps = combineClassNames(messageProps, styles.message);

    return (
      <p {...allMessageProps}>
        {this.renderIcon()}
        {message}
      </p>
    );
  }

  renderIcon() {
    const { invalid } = this.props;

    if (!invalid) {
      return;
    }

    return (
      <ErrorIcon
        filled={true}
        className={styles.messageIcon}
        svgClassName={styles.messageIconSvg}
      />
    );
  }

  render() {
    const { className, invalid } = this.props;
    const classNames = classnames({
      [styles.root]: true,
      [styles.invalid]: invalid,
      [className]: className
    });

    return (
      <div className={classNames}>
        {this.renderLabel()}
        {this.renderInput()}
        {this.renderMessage()}
      </div>
    );
  }

}
