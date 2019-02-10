import styles from './NativeMonthPicker.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import pad from 'pad-left';

import ChevronIcon from '../../ChevronIcon/ChevronIcon';

import FieldLabel from '../../FieldLabel/FieldLabel';
import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';

const makeMonthString = ({ month, year }) => {
  if (month && year) {
    return `${year}-${pad(month, 2, '0')}`;
  }

  return '';
};

const getValueFromString = monthString => {
  const [year, month] = monthString.split('-');

  return {
    year: parseInt(year, 10),
    month: parseInt(month, 10)
  };
};

export default class NativeMonthPicker extends Component {
  static displayName = 'NativeMonthPicker';

  static propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.shape({
      month: PropTypes.number,
      year: PropTypes.number
    }),
    valid: PropTypes.bool,
    fieldMessageId: PropTypes.string.isRequired
  };

  static defaultProps = {
    value: {}
  };

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
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

  handleFocus(evt) {
    const { onFocus } = this.props;

    if (typeof onFocus === 'function') {
      onFocus(evt);
    }
  }

  render() {
    const { id, value, valid, fieldMessageId } = this.props;
    // eslint-disable-next-line react/prop-types
    const { label, labelProps, secondaryLabel, tertiaryLabel } = this.props;

    const inputValue = makeMonthString(value);

    const rootClasses = classnames({
      [styles.root]: true,
      [styles.invalid]: valid === false
    });

    return (
      <div className={rootClasses}>
        <FieldLabel
          {...{
            id,
            label: (
              <span>
                {label}
                <ScreenReaderOnly> Month Year</ScreenReaderOnly>
              </span>
            ),
            labelProps,
            secondaryLabel,
            tertiaryLabel
          }}
        />
        <ChevronIcon
          className={styles.chevron}
          svgClassName={styles.chevronSvg}
          direction="down"
        />
        <input
          id={id}
          className={styles.input}
          type="month"
          value={inputValue}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          aria-describedby={fieldMessageId}
        />
      </div>
    );
  }
}
