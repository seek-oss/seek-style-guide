import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Checkbox.less';
import CheckMarkIcon from '../CheckMarkIcon/CheckMarkIcon';
import classnames from 'classnames';

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
    isMultiline: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    inputProps: {
      checked: false
    },
    type: STANDARD,
    isMultiline: false
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
      <div
        className={classnames({
          [styles.standard]: true,
          [styles.isMultiline]: this.props.isMultiline
        })}>
        <CheckMarkIcon svgClassName={styles.checkMark} className={styles.checkBox} />
        <span className={styles.labelContainer}>{label}</span>
      </div>
    );
  }

  renderLabel() {
    const { label, id, type } = this.props;

    return (
      <label className={styles.label} htmlFor={id}>
        {
          type === STANDARD ?
            this.renderStandard(label) :
            this.renderButton(label)
        }
      </label>
    );
  }

  renderInput() {
    const { inputProps, id } = this.props;

    const allInputProps = {
      ...combineClassNames(inputProps, styles.input),
      type: 'checkbox',
      id
    };

    return (
      <input {...allInputProps} />
    );
  }

  render() {
    const { className } = this.props;

    const rootClassNames = classnames({
      [styles.root]: true,
      [className]: className
    });

    return (
      <div className={rootClassNames}>
        { this.renderInput() }
        { this.renderLabel() }
      </div>
    );
  }
}
