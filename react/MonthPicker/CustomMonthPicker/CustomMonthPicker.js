import styles from './CustomMonthPicker.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getYearOptions from './getYearOptions';
import Dropdown from '../../Dropdown/Dropdown';

import FieldLabel from '../../FieldLabel/FieldLabel';
import ScreenReaderOnly from '../../ScreenReaderOnly/ScreenReaderOnly';
import { TONE } from '../../private/tone';

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

/* eslint-disable react/no-deprecated */
export default class CustomMonthPicker extends Component {
  static displayName = 'CustomMonthPicker';

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
    tone: PropTypes.oneOf([
      TONE.POSITIVE,
      TONE.INFO,
      TONE.CRITICAL,
      TONE.NEUTRAL
    ]),
    minYear: PropTypes.number.isRequired,
    maxYear: PropTypes.number.isRequired,
    ascendingYears: PropTypes.bool.isRequired,
    fieldMessageId: PropTypes.string.isRequired
  };

  static defaultProps = {
    value: {}
  };

  constructor({ minYear, maxYear, ascendingYears }) {
    super();

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.storeMonthReference = this.storeMonthReference.bind(this);
    this.storeYearReference = this.storeYearReference.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.blurIfNotFocussed = this.blurIfNotFocussed.bind(this);

    this.yearOptions = getYearOptions(minYear, maxYear, ascendingYears);
  }

  componentWillUpdate(newProps) {
    if (
      ['minYear', 'maxYear', 'ascendingYears'].filter(
        key => newProps[key] !== this.props[key]
      )
    ) {
      this.yearOptions = getYearOptions(
        newProps.minYear,
        newProps.maxYear,
        newProps.ascendingYears
      );
    }
  }

  storeMonthReference(input) {
    if (input !== null) {
      this.monthInput = input;
    }
  }

  storeYearReference(input) {
    if (input !== null) {
      this.yearInput = input;
    }
  }

  handleMonthChange({ target: { value } }) {
    const {
      onChange,
      value: { year }
    } = this.props;

    if (typeof onChange === 'function') {
      onChange({
        month: parseInt(value, 10),
        year
      });
    }
  }

  handleYearChange({ target: { value } }) {
    const {
      onChange,
      value: { month }
    } = this.props;

    if (typeof onChange === 'function') {
      onChange({
        month,
        year: parseInt(value, 10)
      });
    }
  }

  blurIfNotFocussed(active) {
    const { onBlur, value } = this.props;

    if (active !== this.monthInput && active !== this.yearInput) {
      onBlur(value);
    }
  }

  handleBlur({ relatedTarget }) {
    const { onBlur } = this.props;

    if (typeof onBlur === 'function') {
      if (relatedTarget !== null) {
        this.blurIfNotFocussed(relatedTarget);
      } else {
        // IE 9 - 11 Hack -- relatedTarget is null in blur event
        setTimeout(() => {
          const { activeElement } = document;
          this.blurIfNotFocussed(activeElement);
        });
      }
    }
  }

  handleFocus(evt) {
    const { onFocus } = this.props;
    if (typeof onFocus === 'function') {
      onFocus(evt);
    }
  }

  render() {
    const { id, value, valid, tone, fieldMessageId } = this.props;
    // eslint-disable-next-line react/prop-types
    const { label, labelProps, secondaryLabel, tertiaryLabel } = this.props;

    const { month, year } = value;
    const monthValue = String(month || '');
    const yearValue = String(year || '');

    return (
      <div>
        <FieldLabel
          {...{
            id: `${id}-month`,
            label: (
              <span>
                {label}
                <ScreenReaderOnly> Month</ScreenReaderOnly>
              </span>
            ),
            labelProps,
            secondaryLabel,
            tertiaryLabel
          }}
        />
        <FieldLabel
          {...{
            id: `${id}-year`,
            label: <ScreenReaderOnly>{label} Year</ScreenReaderOnly>,
            raw: true
          }}
        />

        <div className={styles.dropdownWrapper}>
          <Dropdown
            id={`${id}-month`}
            options={months}
            className={styles.dropdown}
            valid={valid}
            tone={tone}
            message={false}
            placeholder="Month"
            onChange={this.handleMonthChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            value={monthValue}
            inputProps={{
              ref: this.storeMonthReference,
              'aria-describedby': fieldMessageId
            }}
          />

          <Dropdown
            id={`${id}-year`}
            options={this.yearOptions}
            className={styles.dropdown}
            valid={valid}
            tone={tone}
            message={false}
            placeholder="Year"
            onChange={this.handleYearChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            value={yearValue}
            inputProps={{
              ref: this.storeYearReference,
              'aria-describedby': fieldMessageId
            }}
          />
        </div>
      </div>
    );
  }
}
