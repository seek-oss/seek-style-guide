import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import styles from './NativeMonthPicker.less';

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
    const { onChange, yearValue } = this.props;

    onChange({
      month: value,
      year: yearValue
    });
  }

  render() {
    const { monthValue, yearValue, className } = this.props;

    const value = `${yearValue}-${monthValue}`;

    const rootClasses = classnames({
      [className]: className,
      [styles.root]: true
    });

    return (
      <input className={rootClasses} type="month" value={value} />
    );
  }
}
