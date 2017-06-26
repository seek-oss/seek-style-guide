import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Textarea from './Textarea';
import styles from './Textarea.less';
import classnames from 'classnames';
import fieldMessageOptions from '../private/FieldMessage/FieldMessage.demo';

class TextareaContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired
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
    const { component: DemoComponent } = this.props;
    const { inputValue } = this.state;

    return (
      <DemoComponent
        inputProps={{
          onChange: this.handleChange,
          value: inputValue
        }}
      />
    );
  }
}

export default {
  route: '/textarea',
  title: 'Textarea',
  component: Textarea,
  container: TextareaContainer,
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
          label: 'Secondary Label',
          transformProps: props => ({
            ...props,
            secondaryLabel: '(secondary)'
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
        }
      ]
    },
    ...fieldMessageOptions
  ]
};
