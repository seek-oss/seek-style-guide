import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import styles from './CustomMonthPicker.less';

const months = [
  { value: 1, text: 'Jan' },
  { value: 2, text: 'Feb' },
  { value: 3, text: 'Mar' },
  { value: 4, text: 'Apr' },
  { value: 5, text: 'May' },
  { value: 6, text: 'Jun' },
  { value: 7, text: 'Jul' },
  { value: 8, text: 'Aug' },
  { value: 9, text: 'Sep' },
  { value: 10, text: 'Oct' },
  { value: 11, text: 'Nov' },
  { value: 12, text: 'Dec' }
];

const years = [];

const startYear = new Date().getFullYear();
const endYear = startYear - 80;

for (let i = startYear; i >= endYear; i--) {
  years.push({ value: i, text: i });
}

export default class CustomMonthPicker extends Component {
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

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleMonthChange({ target: { value } }) {
    const { onChange, yearValue } = this.props;

    onChange({
      month: value,
      year: yearValue
    });
  }

  handleYearChange({ target: { value } }) {
    const { onChange, monthValue } = this.props;

    onChange({
      month: monthValue,
      year: value
    });
  }

  render() {
    const { monthValue, yearValue, className } = this.props;

    const rootClasses = classnames({
      [className]: className,
      [styles.root]: true
    });

    return (
      <div className={rootClasses}>
        <div className={styles.inner}>
          <select onChange={this.handleMonthChange} value={monthValue} className={styles.dropdown}>
            {
              months.map(({ value: month, text }) => (
                <option value={month} key={month}>{text}</option>
              ))}
          </select>
          <select onChange={this.handleYearChange} value={yearValue} className={styles.dropdown}>
            {
              years.map(({ value: year, text }) => (
                <option value={year} key={year}>{text}</option>
              ))}
          </select>
        </div>
      </div>
    );
  }
}
