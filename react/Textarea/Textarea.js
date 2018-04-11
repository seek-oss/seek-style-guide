import styles from './Textarea.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FieldMessage from '../private/FieldMessage/FieldMessage';
import FieldLabel from '../private/FieldLabel/FieldLabel';
import Text from '../Text/Text';

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
      const { id } = props;

      if (typeof id !== 'string') {
        return new Error(`Invalid prop \`id\` of type \`${typeof id}\` supplied to \`${componentName}\`, expected \`string\`.`);
      }
    },
    /* eslint-enable consistent-return */
    className: PropTypes.string,
    valid: PropTypes.bool,
    description: PropTypes.string,
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
    countFeedback: (props, propName, componentName) => {
      const { inputProps = {} } = props;
      const { value } = inputProps;

      if (typeof props[propName] !== 'function' && typeof props[propName] !== 'undefined') {
        return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected \`function\`.`);
      }

      if (props[propName] && typeof value !== 'string') {
        return new Error(`\`inputProps.value\` must be supplied if \`${propName}\` is set`);
      }
    },
    secondaryLabel: PropTypes.string
    /* eslint-enable consistent-return */
  };

  static defaultProps = {
    id: '',
    className: '',
    description: ''
  };

  constructor() {
    super();

    this.renderInput = this.renderInput.bind(this);
    this.renderCharacterCount = this.renderCharacterCount.bind(this);
  }

  /* eslint-disable consistent-return */
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
  /* eslint-enable consistent-return */

  renderInput() {
    const { inputProps, id } = this.props;
    const allInputProps = {
      ...combineClassNames(inputProps, styles.textarea),
      ...(id ? { id } : {})
    };

    return (
      <textarea {...allInputProps} />
    );
  }

  render() {
    const { className, valid } = this.props;
    const classNames = classnames({
      [styles.root]: true,
      [styles.invalid]: valid === false,
      [className]: className
    });

    // eslint-disable-next-line react/prop-types
    const { id, label, labelProps, invalid, help, helpProps, message, messageProps, secondaryLabel, tertiaryLabel, description } = this.props;
    const hasDescription = description.length > 0;

    return (
      <div className={classNames}>
        <FieldLabel {...{ id, label, labelProps, secondaryLabel, tertiaryLabel, raw: hasDescription }} />
        {
          hasDescription ? <Text secondary>{description}</Text> : null
        }
        {this.renderInput()}
        <div className={styles.footer}>
          <FieldMessage {...{ invalid, help, helpProps, valid, message, messageProps }} />
          {this.renderCharacterCount()}
        </div>
      </div>
    );
  }
}
