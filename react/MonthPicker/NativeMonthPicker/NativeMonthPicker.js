import styles from './NativeMonthPicker.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import pad from 'pad-left';

import ChevronIcon from '../../ChevronIcon/ChevronIcon';

const makeMonthString = ({ month, year }) => {
  if (month && year) {
    return `${year}-${pad(month, 2, '0')}`;
  }

  return '';
};

const getValueFromString = monthString => {
  const [ year, month ] = monthString.split('-');

  return {
    year: parseInt(year, 10),
    month: parseInt(month, 10)
  };
};

export default class NativeMonthPicker extends Component {
  static displayName = 'NativeMonthPicker';

  static propTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.shape({
      month: PropTypes.number,
      year: PropTypes.number
    }),
    valid: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string
  };

  static defaultProps = {
    value: {},
    className: ''
  };

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange({ target: { value } }) {
    const { onChange } = this.props;

    if (typeof onChange === 'function') {
      onChange(getValueFromString(value));
    }
  }

  handleBlur({ target: { value } }) {
    const { onBlur } = this.props;

    if (typeof onBlur === 'function') {
      onBlur(getValueFromString(value));
    }
  }

  render() {
    const { value, className, valid, id } = this.props;

    const inputValue = makeMonthString(value);

    const rootClasses = classnames({
      [styles.root]: true,
      [styles.invalid]: valid === false,
      [className]: className
    });

    return (
      <div className={rootClasses}>
        <ChevronIcon
          className={styles.chevron}
          svgClassName={styles.chevronSvg}
          direction="down"
        />
        <input
          {...(id ? { id } : {})}
          className={styles.input}
          type="month"
          value={inputValue}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}
