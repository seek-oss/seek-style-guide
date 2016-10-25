import styles from './CustomMonthPicker.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import Dropdown from '../../Dropdown/Dropdown';

const months = [
  { value: '1', label: 'Jan' },
  { value: '2', label: 'Feb' },
  { value: '3', label: 'Mar' },
  { value: '4', label: 'Apr' },
  { value: '5', label: 'May' },
  { value: '6', label: 'Jun' },
  { value: '7', label: 'Jul' },
  { value: '8', label: 'Aug' },
  { value: '9', label: 'Sep' },
  { value: '10', label: 'Oct' },
  { value: '11', label: 'Nov' },
  { value: '12', label: 'Dec' }
];

const years = [];

const startYear = new Date().getFullYear();
const endYear = startYear - 80;

for (let i = startYear; i >= endYear; i--) {
  years.push({ value: `${i}`, label: `${i}` });
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
      month: parseInt(value, 10),
      year: yearValue
    });
  }

  handleYearChange({ target: { value } }) {
    const { onChange, monthValue } = this.props;

    onChange({
      month: monthValue,
      year: parseInt(value, 10)
    });
  }

  render() {
    const { monthValue, yearValue, className, invalid } = this.props;

    const rootClasses = classnames({
      [className]: className,
      [styles.invalid]: invalid,
      [styles.root]: true
    });

    return (
      <div className={rootClasses}>
        <Dropdown
          options={months}
          className={styles.dropdown}
          invalid={invalid}
          inputProps={{
            onChange: this.handleMonthChange,
            value: monthValue,
            className: styles.select
          }}
        />
        <Dropdown
          options={years}
          className={styles.dropdown}
          invalid={invalid}
          inputProps={{
            onChange: this.handleYearChange,
            value: yearValue,
            className: styles.select
          }}
        />
      </div>
    );
  }
}
