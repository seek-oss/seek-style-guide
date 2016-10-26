import styles from './NativeMonthPicker.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import pad from 'pad-left';

import ChevronIcon from '../../../icons/ChevronIcon/ChevronIcon';

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

  static displayName = 'NativeMonthPicker';

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
      [styles.root]: true,
      [className]: className,
      [styles.invalid]: invalid
    });

    return (
      <div className={rootClasses}>
        <ChevronIcon
          className={styles.chevron}
          svgClassName={styles.chevronSvg}
          direction="down"
        />
        <input
          className={styles.input}
          type="month"
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
