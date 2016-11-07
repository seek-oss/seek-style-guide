import React, { Component, PropTypes } from 'react';
import styles from './Checkbox.less';
import CheckMarkIcon from '../../icons/CheckMarkIcon/CheckMarkIcon';
import classnames from 'classnames';

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
      onChange: PropTypes.func.isRequired,
      checked: PropTypes.bool.isRequired
    })
  }

  static defaultProps = {
    className: '',
    inputProps: {
      checked: false
    }
  };

  renderLabel() {
    const { label, id } = this.props;

    return (
      <label className={styles.label} htmlFor={id}>
        <CheckMarkIcon svgClassName={styles.checkMark} className={styles.checkBox} />
        <span>{label}</span>
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
