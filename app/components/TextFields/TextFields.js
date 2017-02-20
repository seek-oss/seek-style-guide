import styles from './TextFields.less';
import textFieldStyles from 'seek-style-guide/react/fields/TextField/TextField.less';

import React, { Component } from 'react';
import Baseline from 'react-baseline';
import classnames from 'classnames';

import GridContainer from 'GridContainer/GridContainer';
import SandboxPreview from 'SandboxPreview/SandboxPreview';
import SandboxTogglePanel from 'SandboxTogglePanel/SandboxTogglePanel';
import SandboxToggle from 'SandboxToggle/SandboxToggle';
import Section from 'Section/Section';
import HeadlineText from 'HeadlineText/HeadlineText';
import Spec from 'Spec/Spec';
import Code from 'Code/Code';

import { TextField } from 'seek-style-guide/react';

const specs = {
  default: {
    Height: '5 grid rows',
    'Internal gutters': '15px — @field-gutter-width',
    'Margin bottom': '3 grid rows',
    'Text color': '@sk-charcoal',
    'Font scale': '1.8 — @interaction-type-scale',
    Border: '1px — @sk-mid-gray-light',
    'Border radius': '2px — @field-border-radius'
  },
  focus: {
    Border: '1px @sk-focus'
  },
  invalid: {
    Border: '1px @sk-pink'
  }
};

function getSpec(specsObj) {
  return Object.keys(specsObj).reduce((result, specName) => ({
    ...result,
    ...(specsObj[specName] ? specs[specName] : {})
  }), {});
}

export default class TextFields extends Component {
  constructor() {
    super();

    this.state = {
      focus: false,
      invalid: false,
      baseline: false,
      inputValue: '',
      messageToggle: false,
      messageProps: {
        critical: false,
        positive: false,
        valid: false
      }
    };

    this.toggleFocus = this.toggleFocus.bind(this);
    this.toggleInvalid = this.toggleInvalid.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
    this.toggleMessage = this.toggleMessage.bind(this);
    this.toggleMessagePropsCritical = this.toggleMessagePropsCritical.bind(this);
    this.toggleMessagePropsPositive = this.toggleMessagePropsPositive.bind(this);
    this.toggleMessagePropsValid = this.toggleMessagePropsValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  toggleFocus(event) {
    this.setState({
      focus: event.target.checked
    });
  }

  toggleInvalid(event) {
    this.setState({
      invalid: event.target.checked
    });
  }

  toggleBaseline(event) {
    this.setState({
      baseline: event.target.checked
    });
  }

  toggleMessage(event) {
    this.setState({
      messageToggle: event.target.checked,
      messageProps: {}
    });
  }

  toggleMessagePropsCritical(event) {
    this.setState({
      messageToggle: false,
      messageProps: {
        critical: event.target.checked
      }
    });
  }

  toggleMessagePropsPositive(event) {
    this.setState({
      messageToggle: false,
      messageProps: {
        positive: event.target.checked
      }
    });
  }

  toggleMessagePropsValid(event) {
    this.setState({
      messageToggle: false,
      messageProps: {
        valid: event.target.checked
      }
    });
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleClear() {
    this.setState({
      inputValue: ''
    });
  }

  render() {
    const { focus, invalid, baseline, inputValue, messageToggle, messageProps } = this.state;
    const className = classnames({
      [styles.input]: true,
      [textFieldStyles.rootFocus]: focus
    });
    const spec = getSpec({
      default: true,
      focus,
      invalid,
      messageProps
    });

    let message;

    if (messageToggle) {
      message = 'e.g. David';
    }

    if (messageProps.critical) {
      message = 'Something went wrong';
    }
    if (messageProps.positive) {
      message = 'Looking good ;)';
    }
    if (messageProps.valid) {
      message = 'Could be better, go on';
    }

    const textfield = (
      <TextField
        id="firstName"
        className={className}
        invalid={invalid}
        label="First Name"
        message={message}
        inputProps={{
          type: 'search',
          onChange: this.handleChange,
          value: inputValue
        }}
        messageProps={messageProps}
        onClear={this.handleClear}
      />
    );

    return (
      <div>
        <Baseline isVisible={baseline} color="#eee">
          <div className={styles.sandboxContainer}>
            <GridContainer>
              <div className={styles.sandbox}>
                <SandboxPreview>
                  {textfield}
                </SandboxPreview>
                <div style={{ position: 'absolute', top: 0, right: 0 }}>
                  <SandboxToggle
                    label="Baseline"
                    toggleType="checkbox"
                    toggleProps={{
                      type: 'checkbox',
                      checked: baseline,
                      onChange: this.toggleBaseline
                    }}
                  />
                </div>
              </div>
            </GridContainer>
          </div>
        </Baseline>

        <SandboxTogglePanel>
          <SandboxToggle
            label="Focus"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: focus,
              onChange: this.toggleFocus
            }}
          />
          <SandboxToggle
            label="Invalid"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: invalid,
              onChange: this.toggleInvalid
            }}
          />
        </SandboxTogglePanel>

        <SandboxTogglePanel>
          <SandboxToggle
            label="Message Standard"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: messageToggle,
              onChange: this.toggleMessage
            }}
          />

          <SandboxToggle
            label="Message Critical"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: messageProps.critical,
              onChange: this.toggleMessagePropsCritical
            }}
          />

          <SandboxToggle
            label="Message Positive"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: messageProps.positive,
              onChange: this.toggleMessagePropsPositive
            }}
          />

          <SandboxToggle
            label="Message Valid"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: messageProps.valid,
              onChange: this.toggleMessagePropsValid
            }}
          />
        </SandboxTogglePanel>

        <GridContainer className={styles.gridContainer}>
          <Section className={styles.section}>
            <HeadlineText>Spec</HeadlineText>
            <Spec spec={spec} />
          </Section>

          <Section className={styles.section}>
            <HeadlineText>Code</HeadlineText>
            <Code jsx={textfield} />
          </Section>
        </GridContainer>
      </div>
    );
  }
}
