import styles from './MonthPicker.demo.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MonthPicker from './MonthPicker';
import fieldMessageOptions from '../private/FieldMessage/FieldMessage.demo';
import fieldLabelOptions from '../private/FieldLabel/FieldLabel.demo';

class MonthPickerContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      value: {}
    };
  }

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { value } = this.state;

    return (
      <DemoComponent
        {...componentProps}
        className={styles.root}
        onChange={this.handleChange}
        value={value}
      />
    );
  }
}

export default {
  route: '/monthpicker',
  title: 'Month Picker',
  component: MonthPicker,
  container: MonthPickerContainer,
  initialProps: {
    id: 'startMonth',
    label: 'Start Month',
    message: '',
    // Documentation only:
    onChange: () => {},
    value: { month: 11, year: 1955 }
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Native',
          transformProps: props => ({
            ...props,
            native: true
          })
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions
  ]
};
