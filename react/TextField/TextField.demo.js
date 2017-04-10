import React, { Component, PropTypes } from 'react';
import TextField from './TextField';
import styles from './TextField.less';
import classnames from 'classnames';
import fieldMessageOptions from '../private/FieldMessage/FieldMessage.demo';
import fieldLabelOptions from '../private/FieldLabel/FieldLabel.demo';

class TextFieldContainer extends Component {
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

  handleClear = () => {
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { component: DemoComponent } = this.props;
    const { inputValue } = this.state;

    return (
      <div style={{ width: '300px' }}>
        <DemoComponent
          inputProps={{
            onChange: this.handleChange,
            value: inputValue
          }}
          onClear={this.handleClear}
        />
      </div>
    );
  }
}

export default {
  route: '/textfields',
  title: 'Textfields',
  component: TextField,
  container: TextFieldContainer,
  initialProps: {
    id: 'firstName',
    label: 'First Name',
    message: 'e.g. Olivia',
    // Documentation only:
    inputProps: {
      onChange: () => {},
      value: '...'
    },
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
