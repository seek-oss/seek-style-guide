import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import styles from './TextField.less';
import * as sketch from './TextField.sketch';
import classnames from 'classnames';
import fieldMessageOptions from '../FieldMessage/FieldMessage.demoFragment';
import fieldLabelOptions from '../FieldLabel/FieldLabel.demoFragment';

class TextFieldContainer extends Component {
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

  handleClear = () => {
    this.setState({
      inputValue: ''
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
          onClear={this.handleClear}
        />
      </div>
    );
  }
}

export default {
  route: '/textfield',
  title: 'Text Field',
  category: 'Form',
  component: TextField,
  container: TextFieldContainer,
  sketch,
  initialProps: {
    id: 'firstName',
    label: 'First Name',
    message: 'e.g. Olivia',
    // Documentation only:
    onChange: () => {},
    value: '...',
    onClear: () => {}
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
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions
  ]
};
