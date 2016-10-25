import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import pad from 'pad-left';

import styles from './NativeMonthPicker.less';

const makeMonthString = (month, year) => {
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
  static propTypes = {
    onChange: PropTypes.func,
    monthValue: PropTypes.number,
    yearValue: PropTypes.number,
    invalid: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    invalid: false
  };

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    const { onChange } = this.props;

    onChange(getValueFromString(value));
  }

  render() {
    const { monthValue, yearValue, className, invalid } = this.props;

    const value = makeMonthString(monthValue, yearValue);

    const rootClasses = classnames({
      [className]: className,
      [styles.root]: true,
      [styles.invalid]: invalid
    });

    return (
      <input
        className={rootClasses}
        type="month"
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}
