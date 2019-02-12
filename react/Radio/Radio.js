import styles from './Radio.less';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Text from '../Text/Text';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

export default class Radio extends Component {
  static displayName = 'Radio';

  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    label: PropTypes.string,
    labelProps: PropTypes.object,
    inputProps: PropTypes.object
  };

  static defaultProps = {
    className: '',
    label: '',
    inputProps: {}
  };

  renderInput() {
    const {
      id,
      value,
      checked,
      onChange,
      onFocus,
      onBlur,
      inputProps
    } = this.props;
    const allInputProps = {
      id,
      value,
      checked,
      onChange,
      onFocus,
      onBlur,
      ...combineClassNames(inputProps, styles.input),
      type: 'radio'
    };

    return <input {...allInputProps} />;
  }

  render() {
    const { label, labelProps, id, className } = this.props;
    const allLabelProps = {
      htmlFor: id,
      ...combineClassNames(labelProps, styles.label)
    };

    return (
      <div className={className}>
        <label {...allLabelProps}>
          {this.renderInput()}
          <svg
            className={styles.svg}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <circle
              className={classnames(styles.circle, styles.circle_isHover)}
              cx="100"
              cy="100"
              r="100"
            />
            <circle
              className={classnames(styles.circle, styles.circle_isSelected)}
              cx="100"
              cy="100"
              r="100"
            />
          </svg>
          <Text raw={true} baseline={false} className={styles.labelText}>
            {label}
          </Text>
        </label>
      </div>
    );
  }
}
