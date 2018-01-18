import styles from './MonthPicker.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import CustomMonthPicker from './CustomMonthPicker/CustomMonthPicker';
import NativeMonthPicker from './NativeMonthPicker/NativeMonthPicker';

import FieldMessage from '../private/FieldMessage/FieldMessage';
import FieldLabel from '../private/FieldLabel/FieldLabel';

const currYear = new Date().getFullYear();

export default class MonthPicker extends Component {
  static displayName = 'MonthPicker';

  static propTypes = {
    /* eslint-disable consistent-return */
    id: (props, propName, componentName) => {
      const { id } = props;

      if (typeof id !== 'string') {
        return new Error(
          `Invalid prop \`id\` of type \`${typeof id}\` supplied to \`${componentName}\`, expected \`string\`.`
        );
      }
    },
    className: PropTypes.string,
    /* eslint-enable consistent-return */
    valid: PropTypes.bool,
    value: PropTypes.shape({
      month: PropTypes.number,
      year: PropTypes.number
    }),
    native: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    minYear: PropTypes.number,
    maxYear: PropTypes.number,
    ascendingYears: PropTypes.bool
  };

  static defaultProps = {
    id: '',
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
      onBlur,
      minYear,
      maxYear,
      ascendingYears
    } = this.props;
    const monthPickerProps = {
      className: styles.input,
      ...(id ? { id } : {}),
      value,
      onChange,
      onBlur,
      valid,
      minYear,
      maxYear,
      ascendingYears
    };

    return native ? (
      <NativeMonthPicker {...monthPickerProps} />
    ) : (
      <CustomMonthPicker {...monthPickerProps} />
    );
  }

  render() {
    const { className } = this.props;
    const classNames = classnames({
      [styles.root]: true,
      [className]: className
    });

    /* eslint-disable react/prop-types */
    const {
      id,
      label,
      labelProps,
      secondaryLabel,
      tertiaryLabel,
      invalid,
      help,
      helpProps,
      valid,
      message,
      messageProps
    } = this.props;
    /* eslint-enable react/prop-types */

    return (
      <div className={classNames}>
        <FieldLabel
          {...{ id, label, labelProps, secondaryLabel, tertiaryLabel }}
        />
        {this.renderInput()}
        <FieldMessage
          {...{ invalid, help, helpProps, valid, message, messageProps }}
        />
      </div>
    );
  }
}
