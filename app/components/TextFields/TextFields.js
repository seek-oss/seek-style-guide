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
      baseline: false,
      inputValue: '',
      messageStandard: false,
      messageCritical: false,
      messagePostive: false,
      messageAdequate: false
    };

    this.toggleFocus = this.toggleFocus.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
    this.toggleMessageStandard = this.toggleMessageStandard.bind(this);
    this.toggleMessageCritical = this.toggleMessageCritical.bind(this);
    this.toggleMessagePostive = this.toggleMessagePostive.bind(this);
    this.toggleMessageAdequate = this.toggleMessageAdequate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  toggleFocus(event) {
    this.setState({
      focus: event.target.checked
    });
  }

  toggleBaseline(event) {
    this.setState({
      baseline: event.target.checked
    });
  }

  toggleMessageStandard(event) {
    this.setState({
      messageStandard: event.target.checked,
      messageCritical: false,
      messagePostive: false,
      messageAdequate: false
    });
  }

  toggleMessageCritical(event) {
    this.setState({
      messageStandard: false,
      messageCritical: event.target.checked,
      messagePostive: false,
      messageAdequate: false
    });
  }

  toggleMessagePostive(event) {
    this.setState({
      messageStandard: false,
      messageCritical: false,
      messagePostive: event.target.checked,
      messageAdequate: false
    });
  }

  toggleMessageAdequate(event) {
    this.setState({
      messageStandard: false,
      messageCritical: false,
      messagePostive: false,
      messageAdequate: event.target.checked
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
    const { focus, baseline, inputValue, messageStandard, messageCritical, messagePostive, messageAdequate } = this.state;
    const className = classnames({
      [styles.input]: true,
      [textFieldStyles.rootFocus]: focus
    });
    const spec = getSpec({
      default: true,
      focus
    });

    let message;
    let valid;
    const messageProps = {};

    if (messageStandard) {
      message = 'e.g. David';
    }

    if (messageCritical) {
      message = 'Something went wrong';
      valid = false;
    }

    if (messagePostive) {
      message = 'Looking good ;)';
      valid = true;
    }

    if (messageAdequate) {
      message = 'We think it could be better.';
      valid = true;
      messageProps.secondary = true;
    }

    const textfield = (
      <TextField
        id="firstName"
        className={className}
        label="First Name"
        inputProps={{
          type: 'search',
          onChange: this.handleChange,
          value: inputValue
        }}
        message={message}
        valid={valid}
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
        </SandboxTogglePanel>
        <SandboxTogglePanel>
          <h5 className={styles.messageHeader}>Message Style Examples:</h5>

          <SandboxToggle
            label="Standard"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: messageStandard,
              onChange: this.toggleMessageStandard
            }}
          />

          <SandboxToggle
            label="Critical"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: messageCritical,
              onChange: this.toggleMessageCritical
            }}
          />

          <SandboxToggle
            label="Postive"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: messagePostive,
              onChange: this.toggleMessagePostive
            }}
          />

          <SandboxToggle
            label="Adequate"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: messageAdequate,
              onChange: this.toggleMessageAdequate
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
