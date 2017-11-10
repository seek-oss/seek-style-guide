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
    message: ''
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
        },
        {
          label: 'Ascending years',
          transformProps: props => ({
            ...props,
            ascendingYears: true
          })
        }
      ]
    },
    {
      label: 'Min year',
      type: 'radio',
      states: [
        {
          label: 'Min year',
          transformProps: ({ minYear, ...restProps }) => restProps
        },
        {
          label: '1984',
          transformProps: props => ({
            ...props,
            minYear: 1984
          })
        },
        {
          label: '2000',
          transformProps: props => ({
            ...props,
            minYear: 2000
          })
        }
      ]
    },
    {
      label: 'Max year',
      type: 'radio',
      states: [
        {
          label: 'Max year',
          transformProps: ({ maxYear, ...restProps }) => restProps
        },
        {
          label: '2001',
          transformProps: props => ({
            ...props,
            maxYear: 2001
          })
        },
        {
          label: '2048',
          transformProps: props => ({
            ...props,
            maxYear: 2048
          })
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions
  ]
};
