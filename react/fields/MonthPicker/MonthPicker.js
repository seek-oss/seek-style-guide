import styles from './MonthPicker.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import CustomMonthPicker from './CustomMonthPicker/CustomMonthPicker';
import NativeMonthPicker from './NativeMonthPicker/NativeMonthPicker';

import FieldMessage from '../FieldMessage/FieldMessage';
import FieldLabel from '../FieldLabel/FieldLabel';

export default class MonthPicker extends Component {

  static displayName = 'MonthPicker';

  static propTypes = {
    /* eslint-disable consistent-return */
    id: (props, propName, componentName) => {
      const { id } = props;

      if (typeof id !== 'string') {
        return new Error(`Invalid prop \`id\` of type \`${typeof id}\` supplied to \`${componentName}\`, expected \`string\`.`);
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
    onBlur: PropTypes.func
  };

  static defaultProps = {
    id: '',
    className: '',
    native: false
  };

  constructor() {
    super();

    this.renderInput = this.renderInput.bind(this);
  }

  renderInput() {
    const { id, value, onChange, native, valid, onBlur } = this.props;
    const monthPickerProps = {
      className: styles.input,
      ...(id ? { id } : {}),
      value,
      onChange,
      onBlur,
      valid
    };

    return (
      native ?
        <NativeMonthPicker {...monthPickerProps} /> :
        <CustomMonthPicker {...monthPickerProps} />
    );
  }

  render() {
    const { className } = this.props;
    const classNames = classnames({
      [styles.root]: true,
      [className]: className
    });

    return (
      <div className={classNames}>
        <FieldLabel {...this.props} />
        {this.renderInput()}
        <FieldMessage {...this.props} />
      </div>
    );
  }

}
