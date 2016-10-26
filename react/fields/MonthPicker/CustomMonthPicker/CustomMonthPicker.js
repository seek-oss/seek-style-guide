import styles from './CustomMonthPicker.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import range from 'lodash.range';

import Dropdown from '../../Dropdown/Dropdown';

const getYearOptions = () => {
  const maxYear = new Date().getFullYear();
  const minYear = maxYear - 100;

  return range(maxYear, minYear - 1).map(value => {
    const stringValue = `${value}`;

    return {
      value: stringValue,
      label: stringValue
    };
  });
};

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
const years = getYearOptions();

export default class CustomMonthPicker extends Component {

  static displayName = 'CustomMonthPicker';

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
      [styles.root]: true
    });

    return (
      <div className={rootClasses}>
        <Dropdown
          options={months}
          className={styles.dropdownInput}
          invalid={invalid}
          placeholder="Month"
          inputProps={{
            onChange: this.handleMonthChange,
            value: monthValue,
            className: styles.select
          }}
        />
        <Dropdown
          options={years}
          className={styles.dropdownInput}
          invalid={invalid}
          placeholder="Year"
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
