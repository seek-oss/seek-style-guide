import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Textarea from './Textarea';
import styles from './Textarea.less';
import classnames from 'classnames';
import fieldMessageOptions from '../private/FieldMessage/FieldMessage.demo';
import fieldLabelOptions from '../private/FieldLabel/FieldLabel.demo';
import * as sketch from './Textarea.sketch';

class TextareaContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { inputValue } = this.state;

    return (
      <DemoComponent
        {...componentProps}
        inputProps={{
          onChange: this.handleChange,
          value: inputValue
        }}
      />
    );
  }
}

export default {
  route: 'textarea',
  title: 'Textarea',
  category: 'Form',
  component: Textarea,
  container: TextareaContainer,
  sketch,
  initialProps: {
    id: 'description',
    label: 'Description',
    message: '',
    // Documentation only:
    inputProps: {
      onChange: () => {},
      value: '...'
    }
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Focus',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootFocus)
          })
        },
        {
          label: 'Show Count',
          transformProps: props => ({
            ...props,
            countFeedback: value => ({
              count: 500 - value.length
            })
          })
        },
        {
          label: 'Description',
          transformProps: props => ({
            ...props,
            description: 'Describe a descriptive description descriptively'
          })
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions
  ]
};
