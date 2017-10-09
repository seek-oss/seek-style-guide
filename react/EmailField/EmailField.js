import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '../TextField/TextField';

const seekEmailRegex = '^[a-zA-Z0-9_][a-zA-Z0-9!#$%&\'*+/=?_`{|}~\-]*(?:\.[a-zA-Z0-9!#$%&\';*+/=?_`{|}~\-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2,})$';

export default class EmailField extends Component {
  static displayName = 'EmailField';

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
      ...inputProps,
      type: 'email',
      pattern: seekEmailRegex
    };

    return <TextField {...props} ref={this.storeInputReference} inputProps={combinedInputProps} />;
  }
}
