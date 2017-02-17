import styles from './MonthPicker.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import ErrorIcon from '../../icons/ErrorIcon/ErrorIcon';
import TickCircleIcon from '../../icons/TickCircleIcon/TickCircleIcon';
import CustomMonthPicker from './CustomMonthPicker/CustomMonthPicker';
import NativeMonthPicker from './NativeMonthPicker/NativeMonthPicker';

import Text from '../../Text/Text';
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
    /* eslint-enable consistent-return */
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
    message: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.oneOf([false])
    ]),
    messageProps: PropTypes.object,
    value: PropTypes.shape({
      month: PropTypes.number,
      year: PropTypes.number
    }),
    native: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  };

  static defaultProps = {
    id: '',
    className: '',
    label: '',
    native: false,
    message: '',
    messageProps: {
      critical: false,
      positive: false,
      secondary: false
    }
  };

  constructor() {
    super();

    this.renderLabel = this.renderLabel.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.renderMessageIcon = this.renderMessageIcon.bind(this);
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
    const { id, value, onChange, native, valid, onBlur } = this.props;
    const monthPickerProps = {
      className: styles.input,
      ...(id ? { id } : {}),
      value,
      onChange,
      onBlur,
      valid
    };

    return (
      native ?
        <NativeMonthPicker {...monthPickerProps} /> :
        <CustomMonthPicker {...monthPickerProps} />
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
    const { className, message } = this.props;
    const classNames = classnames({
      [styles.root]: true,
      [styles.noMarginBottom]: message || message === false,
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
