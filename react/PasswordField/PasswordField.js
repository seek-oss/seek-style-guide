import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';

export default class PasswordField extends Component {
  static displayName = 'PasswordField';

  static propTypes = {
    inputProps: PropTypes.object
  };

  static defaultProps = {
    inputProps: {}
  };

  constructor() {
    super();

    this.storeInputReference = this.storeInputReference.bind(this);
  }

  storeInputReference(textField) {
    if (textField !== null) {
      this.input = textField.input;
    }
  }

  render() {
    const { inputProps, ...props } = this.props;
    const combinedInputProps = {
      ...inputProps
    };

    return (
      <TextField
        {...props}
        ref={this.storeInputReference}
        type='password'
        inputProps={combinedInputProps}
      />
    );
  }
}
