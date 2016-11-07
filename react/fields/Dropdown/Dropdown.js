import styles from './Dropdown.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import ErrorIcon from '../../icons/ErrorIcon/ErrorIcon';
import ChevronIcon from '../../icons/ChevronIcon/ChevronIcon';

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
    help: PropTypes.string,
    helpProps: PropTypes.object,
    message: PropTypes.string,
    messageProps: PropTypes.object,
    options: PropTypes.arrayOf((propValue, key, componentName) => {
      const { value, label } = propValue[key];

      if (typeof value !== 'string') {
        return new Error(`Invalid prop \`options[${key}].value\` of type \`${typeof value}\` supplied to \`${componentName}\`, expected \`string\`.`);
      }

      if (value === '') {
        return new Error(`\`options[${key}].value\` can't be an empty string.`);
      }

      if (typeof label !== 'string') {
        return new Error(`Invalid prop \`options[${key}].label\` of type \`${typeof label}\` supplied to \`${componentName}\`, expected \`string\`.`);
      }
    }),
    placeholder: PropTypes.string
  };

  static defaultProps = {
    id: '',
    className: '',
    invalid: false,
    label: '',
    help: '',
    message: '',
    placeholder: '',
    options: []
  };

  constructor() {
    super();

    this.renderLabel = this.renderLabel.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.renderHelp = this.renderHelp.bind(this);
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
          options.map(({ value, label }) => (
            <option
              value={value}
              key={value}
              className={styles.option}>
              { label }
            </option>
          ))
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

  renderHelp() {
    const { message, help } = this.props;

    if (message || !help) {
      return;
    }

    const { helpProps } = this.props;
    const allHelpProps = combineClassNames(helpProps, styles.help);

    return (
      <p {...allHelpProps}>
        {help}
      </p>
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
        {this.renderChevron()}
        {this.renderSelect()}
        {this.renderHelp()}
        {this.renderMessage()}
      </div>
    );
  }

}
