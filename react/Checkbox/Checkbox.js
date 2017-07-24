import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Checkbox.less';
import CheckMarkIcon from '../CheckMarkIcon/CheckMarkIcon';
import classnames from 'classnames';

const STANDARD = 'standard';
const BUTTON = 'button';

const defaultWrapperRenderer = props => (<div {...props} />);

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
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    inputProps: PropTypes.shape({
      onChange: PropTypes.func,
      checked: PropTypes.bool.isRequired
    }),
    wrapperRenderer: PropTypes.func,
    type: PropTypes.oneOf([STANDARD, BUTTON])
  };

  static defaultProps = {
    className: '',
    inputProps: {
      onChange: () => {},
      checked: false
    },
    type: STANDARD,
    wrapperRenderer: defaultWrapperRenderer
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
        <CheckMarkIcon svgClassName={styles.checkMark} className={styles.checkBox} />
        <span>{label}</span>
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

  renderCheckbox() {
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

  render() {
    return (
      this.props.wrapperRenderer({
        children: this.renderCheckbox()
      })
    );
  }
}
