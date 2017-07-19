require('smoothscroll-polyfill').polyfill();

import styles from './Autosuggest.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactAutosuggest from 'react-autosuggest';
import IsolatedScroll from 'react-isolated-scroll';

import get from 'lodash/get';
import invoke from 'lodash/invoke';
import omit from 'lodash/omit';

import TextField from '../TextField/TextField';

const responsiveBreakpoint = '740';
const smallDeviceOnlyMedia = `(max-width: ${responsiveBreakpoint - 1}px)`;

export default class Autosuggest extends Component {

  static displayName = 'Autosuggest';

  static propTypes = {
    id: PropTypes.string,
    inputProps: PropTypes.object.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    autosuggestProps: PropTypes.object.isRequired,
    /* eslint-disable consistent-return */
    suggestionsContainerClassName: (props, _, componentName) => {
      const { suggestionsContainerClassName, autosuggestProps } = props;
      const { theme } = autosuggestProps || {};
      const { suggestionsContainer } = theme || {};
      const propType = typeof suggestionsContainerClassName;

      if (propType !== 'undefined' && propType !== 'string') {
        return new Error(`Invalid prop \`suggestionsContainerClassName\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`string\`.`);
      }

      if (suggestionsContainer && suggestionsContainerClassName) {
        return new Error('\`suggestionsContainerClassName\` will be overridden by the \`suggestionsContainer\` class in autosuggestProps \`theme\`. Please remove it.');
      }
    }
    /* eslint-enable consistent-return */
  };

  static defaultProps = {
    id: '',
    className: '',
    label: ''
  };

  constructor() {
    super();

    this.storeInputReference = this.storeInputReference.bind(this);
    this.storeTextFieldReference = this.storeTextFieldReference.bind(this);
    this.renderInputComponent = this.renderInputComponent.bind(this);
  }

  storeInputReference(autosuggest) {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
    }
  }

  storeTextFieldReference(textField) {
    if (textField !== null) {
      this.textField = textField.container;
    }
  }

  renderSuggestionsContainer({ ref, ...rest }) {
    const callRef = isolatedScroll => {
      if (isolatedScroll !== null) {
        ref(isolatedScroll.component);
      }
    };

    return (
      <IsolatedScroll {...rest} ref={callRef} />
    );
  }

  scrollOnFocus = () => {
    // Temporary solution till we do CSS in JS
    const getMatchMedia = invoke(window, 'matchMedia', smallDeviceOnlyMedia);
    const isMobileWidth = get(getMatchMedia, 'matches');

    if (isMobileWidth) {
      this.textField.scrollIntoView({ behavior: 'smooth' });
    }
  }

  renderInputComponent(inputProps) {
    const onFocus = () => {
      this.scrollOnFocus();
      inputProps.onFocus(event);
    };

    const allInputProps = {
      ref: this.storeTextFieldReference,
      inputProps: {
        ...omit(inputProps, 'onFocus'),
        onFocus
      },
      ...omit(this.props, [ 'inputProps', 'autosuggestProps' ])
    };

    return (
      <TextField {...allInputProps} />
    );
  }

  render() {
    const { inputProps, label, autosuggestProps, suggestionsContainerClassName } = this.props;
    const { theme = {} } = autosuggestProps;
    const allAutosuggestProps = {
      renderSuggestionsContainer: this.renderSuggestionsContainer,
      renderInputComponent: this.renderInputComponent,
      ...autosuggestProps,
      theme: {
        ...styles,
        suggestionsContainer: classnames({
          [styles.suggestionsContainer]: true,
          [styles.suggestionsContainer_withLabel]: label,
          [suggestionsContainerClassName]: suggestionsContainerClassName
        }),
        ...theme
      }
    };

    return (
      <ReactAutosuggest
        inputProps={inputProps}
        ref={this.storeInputReference}
        {...allAutosuggestProps}
      />
    );
  }

}
