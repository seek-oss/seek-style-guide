import textfieldStyle from '../TextField/TextField.less';
import autosuggestStyles from './Autosuggest.less';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ReactAutosuggest from 'react-autosuggest';
import IsolatedScroll from 'react-isolated-scroll';

import ErrorIcon from '../../icons/ErrorIcon/ErrorIcon';
import ClearField from '../TextField/ClearField/ClearField';

function combineClassNames(props = {}, ...classNames) {
  const { className, ...restProps } = props;

  return {
    className: classnames.apply(null, [...classNames, className]), // eslint-disable-line no-useless-call
    ...restProps
  };
}

export default class Autosuggest extends Component {

  static displayName = 'Autosuggest';

  static propTypes = {
    /* eslint-disable consistent-return */
    id: (props, propName, componentName) => {
      const { id, label } = props;

      if (typeof id !== 'string') {
        return new Error(`Invalid prop \`id\` of type \`${typeof id}\` supplied to \`${componentName}\`, expected \`string\`.`);
      }

      if (label && !id) {
        return new Error(`When ${componentName} has a \`label\`, it should also have an \`id\`.`);
      }
    },
    /* eslint-enable consistent-return */
    className: PropTypes.string,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    /* eslint-disable consistent-return */
    labelProps: (props, propName, componentName) => {
      const { id, label, labelProps } = props;
      const { htmlFor: labelFor } = labelProps || {};

      if (typeof labelProps !== 'undefined' && typeof labelProps !== 'object') {
        return new Error(`Invalid prop \`labelProps\` of type \`${typeof labelProps}\` supplied to \`${componentName}\`, expected \`object\`.`);
      }

      if (!label && labelProps) {
        return new Error(`Specifying \`labelProps\` is redundant when \`label\` is not specified in ${componentName}.`);
      }

      if (labelFor && id) {
        return new Error(`\`labelProps.htmlFor\` will be overridden by \`id\` in ${componentName}. Please remove it.`);
      }
    },
    inputProps: (props, propName, componentName) => {
      const { id, inputProps } = props;
      const { id: inputId } = inputProps || {};

      if (typeof inputProps !== 'undefined' && typeof inputProps !== 'object') {
        return new Error(`Invalid prop \`inputProps\` of type \`${typeof inputProps}\` supplied to \`${componentName}\`, expected \`object\`.`);
      }

      if (inputId && id) {
        return new Error(`\`inputProps.id\` will be overridden by \`id\` in ${componentName}. Please remove it.`);
      }
    },
    /* eslint-disable consistent-return */
    autosuggestProps: PropTypes.object.isRequired,
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
    },
    help: PropTypes.string,
    helpProps: PropTypes.object,
    message: PropTypes.string,
    messageProps: PropTypes.object,
    onClear: PropTypes.func
  };

  static defaultProps = {
    id: '',
    className: '',
    invalid: false,
    label: '',
    help: '',
    message: ''
  };

  constructor() {
    super();

    this.storeInputReference = this.storeInputReference.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderHelp = this.renderHelp.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
    this.handleMouseDownOnClear = this.handleMouseDownOnClear.bind(this);
  }

  storeInputReference(autosuggest) {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
    }
  }

  handleMouseDownOnClear(event) {
    const { onClear } = this.props;

    if (typeof onClear === 'function') {
      onClear(event);
      this.input.focus();
      event.preventDefault(); // https://developer.mozilla.org/en/docs/Web/API/HTMLElement/focus#Notes
    }
  }

  renderLabel() {
    const { label } = this.props;

    if (!label) {
      return;
    }

    const { labelProps, id } = this.props;
    const allLabelProps = {
      ...combineClassNames(labelProps, textfieldStyle.label),
      ...(id ? { htmlFor: id } : {})
    };

    return (
      <label {...allLabelProps}>
        {label}
      </label>
    );
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

  renderInput() {
    const { inputProps, id, onClear, autosuggestProps, suggestionsContainerClassName } = this.props;
    const { theme = {} } = autosuggestProps;
    const { className: inputClassName, ...restInputProps } = inputProps;
    const allInputProps = {
      ...(id ? { id } : {}),
      ...restInputProps
    };
    const allAutosuggestProps = {
      renderSuggestionsContainer: this.renderSuggestionsContainer,
      ...autosuggestProps,
      theme: {
        ...autosuggestStyles,
        suggestionsContainer: classnames({
          [autosuggestStyles.suggestionsContainer]: true,
          [suggestionsContainerClassName]: suggestionsContainerClassName
        }),
        ...theme,
        input: classnames({
          [textfieldStyle.input]: true,
          [textfieldStyle.input_isClearable]: onClear,
          [inputClassName]: inputClassName
        })
      }
    };

    return (
      <ReactAutosuggest
        inputProps={allInputProps}
        ref={this.storeInputReference}
        {...allAutosuggestProps}
      />
    );
  }

  renderClear() {
    return (
      <span
        className={textfieldStyle.clearField}
        onMouseDown={this.handleMouseDownOnClear}
        onTouchStart={this.handleMouseDownOnClear}>
        <ClearField />
      </span>
    );
  }

  renderHelp() {
    const { message, help } = this.props;

    if (message || !help) {
      return;
    }

    const { helpProps } = this.props;
    const allHelpProps = combineClassNames(helpProps, textfieldStyle.help);

    return (
      <p {...allHelpProps}>
        {help}
      </p>
    );
  }

  renderMessage() {
    const { message } = this.props;

    if (!message) {
      return;
    }

    const { messageProps } = this.props;
    const allMessageProps = combineClassNames(messageProps, textfieldStyle.message);

    return (
      <p {...allMessageProps}>
        {this.renderIcon()}
        {message}
      </p>
    );
  }

  renderIcon() {
    const { invalid } = this.props;

    if (!invalid) {
      return;
    }

    return (
      <ErrorIcon
        filled={true}
        className={textfieldStyle.messageIcon}
        svgClassName={textfieldStyle.messageIconSvg}
      />
    );
  }

  render() {
    const { className, invalid, onClear, inputProps = {} } = this.props;
    const hasValue = (inputProps.value && inputProps.value.length > 0);
    const canClear = hasValue && (typeof onClear === 'function');
    const classNames = classnames({
      [textfieldStyle.root]: true,
      [textfieldStyle.invalid]: invalid,
      [textfieldStyle.canClear]: canClear,
      [className]: className
    });

    return (
      <div className={classNames}>
        {this.renderLabel()}
        {this.renderInput()}
        {this.renderClear()}
        {this.renderHelp()}
        {this.renderMessage()}
      </div>
    );
  }

}
