import styles from './Autosuggest.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactAutosuggest from 'react-autosuggest';
import IsolatedScroll from 'react-isolated-scroll';
import omit from 'lodash.omit';

import TextField from '../TextField/TextField';

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
    this.renderInputComponent = this.renderInputComponent.bind(this);
  }

  storeInputReference(autosuggest) {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
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

  renderInputComponent(inputProps) {
    const allInputProps = {
      inputProps,
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
