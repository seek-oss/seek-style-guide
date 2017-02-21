import styles from './Textarea.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import FieldMessage from '../FieldMessage/FieldMessage';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

export default class Textarea extends Component {

  static displayName = 'Textarea';

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
    maxCharacters: PropTypes.number,
    countFeedback: (props, propName, componentName) => {
      const { inputProps = {} } = props;
      const { value } = inputProps;

      if (typeof props[propName] !== 'function' && typeof props[propName] !== 'undefined') {
        return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected \`function\`.`);
      }

      if (props[propName] && typeof value !== 'string') {
        return new Error(`\`inputProps.value\` must be supplied if \`${propName}\` is set`);
      }
    }
  };

  static defaultProps = {
    id: '',
    className: '',
    label: ''
  };

  constructor() {
    super();

    this.storeInputReference = this.storeInputReference.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.renderCharacterLimit = this.renderCharacterLimit.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderCharacterCount = this.renderCharacterCount.bind(this);
  }

  storeInputReference(input) {
    if (input !== null) {
      this.input = input;
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

  renderCharacterLimit() {
    const { maxCharacters } = this.props;

    if (!maxCharacters) {
      return;
    }

    return (
      <span className={styles.maxCharacters}>
        {`(${maxCharacters} character limit)`}
      </span>
    );
  }

  renderInput() {
    const { inputProps, id } = this.props;
    const allInputProps = {
      ...combineClassNames(inputProps, styles.textarea),
      ...(id ? { id } : {}),
      ref: this.storeInputReference
    };

    return (
      <textarea {...allInputProps} />
    );
  }

  renderCharacterCount() {
    const { countFeedback, inputProps = {} } = this.props;
    const { value } = inputProps;

    if (typeof countFeedback !== 'function' || typeof value !== 'string') {
      return;
    }

    const { show = true, count } = countFeedback(value);

    if (!show) {
      return;
    }

    const className = classnames({
      [styles.characterCount]: true,
      [styles.invalidCharacterCount]: (count < 0)
    });

    return (
      <span className={className}>
        { count }
      </span>
    );
  }

  render() {
    const { className, valid } = this.props;
    const classNames = classnames({
      [styles.root]: true,
      [styles.invalid]: valid === false,
      [className]: className
    });

    return (
      <div className={classNames}>
        {this.renderLabel()}
        {this.renderCharacterLimit()}
        {this.renderInput()}
        <div className={styles.footer}>
          <FieldMessage {...this.props} />
          {this.renderCharacterCount()}
        </div>
      </div>
    );
  }

}
