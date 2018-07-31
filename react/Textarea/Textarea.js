import styles from './Textarea.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FieldMessage from '../FieldMessage/FieldMessage';
import FieldLabel from '../FieldLabel/FieldLabel';
import Text from '../Text/Text';
import { TONE } from '../private/tone';

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
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    valid: PropTypes.bool,
    description: PropTypes.string,
    inputProps: PropTypes.object,
    /* eslint-disable consistent-return */
    countFeedback: (props, propName, componentName) => {
      const { value, inputProps = {} } = props;

      if (typeof props[propName] !== 'function' && typeof props[propName] !== 'undefined') {
        return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected \`function\`.`);
      }

      if (props[propName] && typeof value !== 'string' && typeof inputProps.value !== 'string') {
        return new Error(`\`value\` must be supplied if \`${propName}\` is set`);
      }
    },
    secondaryLabel: PropTypes.string,
    tone: PropTypes.oneOf([TONE.POSITIVE, TONE.INFO, TONE.CRITICAL, TONE.HELP])
    /* eslint-enable consistent-return */
  };

  static defaultProps = {
    className: '',
    description: '',
    inputProps: {}
  };

  constructor() {
    super();

    this.renderInput = this.renderInput.bind(this);
    this.renderCharacterCount = this.renderCharacterCount.bind(this);
  }

  /* eslint-disable consistent-return */
  renderCharacterCount() {
    const { value, countFeedback, inputProps = {} } = this.props;
    const resolvedValue = value || inputProps.value || '';

    if (typeof countFeedback !== 'function') {
      return;
    }

    const { show = true, count } = countFeedback(resolvedValue);

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
    const { id, value, onChange, onFocus, onBlur, inputProps } = this.props;
    const allInputProps = {
      id,
      value,
      onChange,
      onFocus,
      onBlur,
      ...combineClassNames(inputProps, styles.textarea),
      'aria-describedby': `${id}-message`
    };

    return (
      <textarea {...allInputProps} />
    );
  }

  render() {
    const { id, className, valid, tone } = this.props;
    const classNames = classnames({
      [styles.root]: true,
      [styles.invalid]: typeof tone !== 'undefined' ? tone === TONE.CRITICAL : valid === false,
      [className]: className
    });

    // eslint-disable-next-line react/prop-types
    const { label, labelProps, invalid, help, helpProps, message, messageProps, secondaryLabel, tertiaryLabel, description } = this.props;
    const hasDescription = description.length > 0;

    return (
      <div className={classNames}>
        <FieldLabel {...{ id, label, labelProps, secondaryLabel, tertiaryLabel, raw: hasDescription }} />
        {
          hasDescription ? <Text secondary>{description}</Text> : null
        }
        {this.renderInput()}
        <div className={styles.footer}>
          <FieldMessage {...{ id: `${id}-message`, invalid, help, helpProps, message, messageProps, tone, ...(tone ? {} : { valid }) }} />
          {this.renderCharacterCount()}
        </div>
      </div>
    );
  }
}
