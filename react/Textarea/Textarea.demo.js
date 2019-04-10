import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Textarea from './Textarea';
import styles from './Textarea.less';
import classnames from 'classnames';
import fieldMessageOptions from '../FieldMessage/FieldMessage.demoFragment';
import fieldLabelOptions from '../FieldLabel/FieldLabel.demoFragment';
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
      <div style={{ width: '300px' }}>
        <DemoComponent
          {...componentProps}
          onChange={this.handleChange}
          value={inputValue}
        />
      </div>
    );
  }
}

export default {
  route: '/textarea',
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
    onChange: () => {},
    value: '...'
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
        },
        {
          label: 'Initial Rows 20',
          transformProps: props => ({
            ...props,
            initialRows: 20
          })
        },
        {
          label: 'Max Rows 50',
          transformProps: props => ({
            ...props,
            maxRows: 50
          })
        }
      ]
    },
    {
      label: 'Highlight invalid text',
      type: 'radio',
      states: [
        {
          label: 'No highlighting',
          transformProps: props => ({
            ...props
          })
        },
        {
          label: 'Disallowed word(s)',
          transformProps: props => ({
            ...props,
            invalidText: 'bad',
            description: 'The word "bad" is invalid'
          })
        },
        {
          label: 'Invalid range',
          transformProps: props => ({
            ...props,
            invalidText: {
              start: 10,
              end: 20
            },
            description: 'Characters 11-20 are invalid'
          })
        },
        {
          label: 'Multiple invalid ranges',
          transformProps: props => ({
            ...props,
            invalidText: [
              {
                start: 10,
                end: 20
              },
              {
                start: 30,
                end: 40
              }
            ],
            description: 'Characters 11-20 and 31-40 are invalid'
          })
        },
        {
          label: 'Character limit',
          transformProps: props => ({
            ...props,
            invalidText: {
              start: 50
            },
            description: 'No more than 50 characters allowed'
          })
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions
  ]
};
