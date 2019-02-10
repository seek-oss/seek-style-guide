import styles from './MonthPicker.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import CustomMonthPicker from './CustomMonthPicker/CustomMonthPicker';
import NativeMonthPicker from './NativeMonthPicker/NativeMonthPicker';

import FieldMessage from '../FieldMessage/FieldMessage';
import { TONE } from '../private/tone';

const currYear = new Date().getFullYear();

export default class MonthPicker extends Component {
  static displayName = 'MonthPicker';

  static propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    valid: PropTypes.bool,
    value: PropTypes.shape({
      month: PropTypes.number,
      year: PropTypes.number
    }),
    native: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    minYear: PropTypes.number,
    maxYear: PropTypes.number,
    ascendingYears: PropTypes.bool,
    tone: PropTypes.oneOf([
      TONE.POSITIVE,
      TONE.INFO,
      TONE.CRITICAL,
      TONE.NEUTRAL
    ])
  };

  static defaultProps = {
    className: '',
    native: false,
    maxYear: currYear,
    minYear: currYear - 100,
    ascendingYears: false
  };

  constructor() {
    super();

    this.renderInput = this.renderInput.bind(this);
  }

  renderInput() {
    const {
      id,
      value,
      onChange,
      native,
      valid,
      tone,
      onBlur,
      onFocus,
      minYear,
      maxYear,
      ascendingYears
    } = this.props;
    // eslint-disable-next-line react/prop-types
    const { label, labelProps, secondaryLabel, tertiaryLabel } = this.props;

    const monthPickerProps = {
      id,
      value,
      onChange,
      onBlur,
      onFocus,
      valid,
      tone,
      minYear,
      maxYear,
      ascendingYears,
      label,
      labelProps,
      secondaryLabel,
      tertiaryLabel,
      fieldMessageId: `${id}-message`
    };

    return native ? (
      <NativeMonthPicker {...monthPickerProps} />
    ) : (
      <CustomMonthPicker {...monthPickerProps} />
    );
  }

  render() {
    const { id, className } = this.props;
    const classNames = classnames({
      [styles.root]: true,
      [className]: className
    });

    /* eslint-disable react/prop-types */
    const {
      invalid,
      help,
      helpProps,
      valid,
      message,
      messageProps,
      tone
    } = this.props;
    /* eslint-enable react/prop-types */

    return (
      <div className={classNames}>
        {this.renderInput()}
        <FieldMessage
          {...{
            id: `${id}-message`,
            invalid,
            help,
            helpProps,
            message,
            messageProps,
            tone,
            ...(tone ? {} : { valid })
          }}
        />
      </div>
    );
  }
}
