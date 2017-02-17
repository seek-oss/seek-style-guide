import styles from './Dropdown.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import ErrorIcon from '../../icons/ErrorIcon/ErrorIcon';
import TickCircleIcon from '../../icons/TickCircleIcon/TickCircleIcon';
import ChevronIcon from '../../icons/ChevronIcon/ChevronIcon';

import Text from '../../Text/Text';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

export default class Dropdown extends Component {

  static displayName = 'Dropdown';

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
      const { id: inputId, value } = inputProps || {};

      if (typeof inputProps !== 'object') {
        return new Error(`Invalid prop \`inputProps\` of type \`${typeof inputProps}\` supplied to \`${componentName}\`, expected \`object\`.`);
      }

      if (typeof value !== 'string') {
        return new Error(`Invalid prop \`inputProps.value\` of type \`${typeof value}\` supplied to \`${componentName}\`, expected \`string\`.`);
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
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string
          })),
          PropTypes.string
        ]).isRequired,
        label: PropTypes.string
      })
    ),
    placeholder: PropTypes.string
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
    },
    placeholder: '',
    options: []
  };

  constructor() {
    super();

    this.renderLabel = this.renderLabel.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
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

  renderOption({ value, label }) {
    return (<option
      value={value}
      key={value}
      className={styles.option}>
      { label }
    </option>);
  }
  renderSelect() {
    const { inputProps, id, options, placeholder } = this.props;
    const inputStyles = classnames({
      [styles.dropdown]: true,
      [styles.placeholderSelected]: !inputProps.value
    });
    const allInputProps = {
      ...combineClassNames(inputProps, inputStyles),
      ...(id ? { id } : {})
    };

    return (
      <select {...allInputProps}>
        <option
          value=""
          disabled={true}>
          { placeholder }
        </option>
        {
          options.map(({ value, label }) => {
            if (Array.isArray(value)) {
              return (<optgroup value="" label={label} key={label}>{value.map(this.renderOption)}</optgroup>);
            }
            return this.renderOption({ value, label });
          })
        }
      </select>
    );
  }

  renderChevron() {
    return (
      <ChevronIcon
        className={styles.chevron}
        svgClassName={styles.chevronSvg}
        direction="down"
      />
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
    const { className, valid, message } = this.props;
    const classNames = classnames({
      [styles.root]: true,
      [styles.noMarginBottom]: message || message === false,
      [styles.invalid]: valid === false,
      [className]: className
    });

    return (
      <div className={classNames}>
        {this.renderLabel()}
        {this.renderChevron()}
        {this.renderSelect()}
        {this.renderMessage()}
      </div>
    );
  }

}
