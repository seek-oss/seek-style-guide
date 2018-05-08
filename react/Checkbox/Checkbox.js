import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Checkbox.less';
import CheckMarkIcon from '../CheckMarkIcon/CheckMarkIcon';
import classnames from 'classnames';
import FieldMessage from '../private/FieldMessage/FieldMessage';

const STANDARD = 'standard';
const BUTTON = 'button';

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
    className: PropTypes.string,
    inputProps: PropTypes.shape({
      onChange: PropTypes.func,
      checked: PropTypes.bool.isRequired
    }),
    type: PropTypes.oneOf([STANDARD, BUTTON]),
    valid: PropTypes.bool,
    message: PropTypes.oneOfType([
      PropTypes.oneOf([false]),
      PropTypes.node
    ]),
    messageProps: PropTypes.object
  }

  static defaultProps = {
    className: '',
    inputProps: {
      checked: false
    },
    type: STANDARD
  };

  renderButton(label) {
    return (
      <span className={styles.button}>
        {label}
      </span>
    );
  }

  renderStandard(label) {
    return (
      <div className={styles.standard}>
        <div className={styles.checkbox}>
          <CheckMarkIcon
            className={styles.checkMark}
            svgClassName={classnames(styles.checkMarkSvg, styles.checkMarkSvg_isHover)}
          />
          <CheckMarkIcon
            svgClassName={classnames(styles.checkMarkSvg, styles.checkMarkSvg_isSelected)}
            className={styles.checkMark}
          />
        </div>
        <span>{label}</span>
      </div>
    );
  }

  renderLabel() {
    const { id, label, type } = this.props;

    return (
      <label htmlFor={id} className={styles.label}>
        {
          type === STANDARD ?
            this.renderStandard(label) :
            this.renderButton(label)
        }
      </label>
    );
  }

  renderMessage(id, valid, message, messageProps) {
    return <FieldMessage {...{ id: `${id}-message`, valid, message, messageProps }} />;
  }

  renderInput() {
    const { id, inputProps } = this.props;

    const allInputProps = {
      id,
      ...combineClassNames(inputProps, styles.input),
      type: 'checkbox'
    };

    return (
      <input {...allInputProps} />
    );
  }

  render() {
    const { className, id, valid, message, messageProps } = this.props;

    const rootClassNames = classnames({
      [styles.root]: true,
      [styles.invalid]: valid === false,
      [className]: className
    });

    return (
      <div className={rootClassNames}>
        { this.renderInput() }
        { this.renderLabel() }
        { this.renderMessage(id, valid, message, messageProps) }
      </div>
    );
  }
}
