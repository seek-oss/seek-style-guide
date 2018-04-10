import styles from './Autosuggest.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactAutosuggest from 'react-autosuggest';
import IsolatedScroll from 'react-isolated-scroll';

import omit from 'lodash/omit';

import TextField from '../TextField/TextField';

import smoothScroll from '../private/smoothScroll';
import smallDeviceOnly from '../private/smallDeviceOnly';

export default class Autosuggest extends Component {
  static displayName = 'Autosuggest';

  static propTypes = {
    id: PropTypes.string,
    inputProps: PropTypes.object.isRequired,
    label: PropTypes.string,
    labelProps: PropTypes.object,
    className: PropTypes.string,
    autosuggestProps: PropTypes.object.isRequired,
    showMobileBackdrop: PropTypes.bool,
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
    label: '',
    labelProps: {},
    showMobileBackdrop: false
  };

  state = {
    areSuggestionsShown: false
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.state.areSuggestionsShown && nextState.areSuggestionsShown && smallDeviceOnly()) {
      smoothScroll(this.textField);
    }
  }

  storeInputReference = autosuggest => {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
    }
  }

  storeTextFieldReference = textField => {
    if (textField !== null) {
      this.textField = textField.container;
    }
  }

  renderSuggestionsContainer = ({ containerProps, children }) => {
    const { ref, ...rest } = containerProps;
    const areSuggestionsShown = children !== null;

    if (this.state.areSuggestionsShown !== areSuggestionsShown) {
      this.setState({ areSuggestionsShown });
    }

    const callRef = isolatedScroll => {
      if (isolatedScroll !== null) {
        ref(isolatedScroll.component);
      }
    };

    return <IsolatedScroll {...rest} ref={callRef} children={children} />;
  }

  renderInputComponent = inputProps => {
    const { label, labelProps } = this.props;

    const textFieldProps = {
      ref: this.storeTextFieldReference,
      inputProps,
      ...omit(this.props, [ 'inputProps', 'labelProps', 'autosuggestProps' ])
    };

    if (label) {
      textFieldProps.labelProps = {
        ...labelProps,
        className: classnames({
          [styles.isLabelCoveredWithBackdrop]: this.props.showMobileBackdrop,
          [labelProps.className]: labelProps.className
        })
      };
    }

    return (
      <TextField {...textFieldProps} />
    );
  }

  render() {
    const { inputProps, label, autosuggestProps, suggestionsContainerClassName, showMobileBackdrop } = this.props;
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
      <div>
        <ReactAutosuggest
          inputProps={inputProps}
          ref={this.storeInputReference}
          {...allAutosuggestProps}
        />
        <div
          className={classnames({
            [styles.autosuggestBackdrop]: true,
            [styles.backdrop_isMobile]: showMobileBackdrop
          })}
        />
      </div>
    );
  }
}
