import styles from './MonthPicker.less';

import React, { Component } from 'react';
import Baseline from 'react-baseline';

import GridContainer from 'GridContainer/GridContainer';
import SandboxPreview from 'SandboxPreview/SandboxPreview';
import SandboxTogglePanel from 'SandboxTogglePanel/SandboxTogglePanel';
import SandboxToggle from 'SandboxToggle/SandboxToggle';
import Section from 'Section/Section';
import HeadlineText from 'HeadlineText/HeadlineText';
import Spec from 'Spec/Spec';
import Code from 'Code/Code';

import { MonthPicker as SeekMonthPicker } from 'seek-style-guide/react';

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
  messageCritical: {
    Border: '1px @sk-pink'
  },
  noReserveMessageSpace: {
    'Margin bottom': '0px'
  }
};

function getSpec(specsObj) {
  return Object.keys(specsObj).reduce((result, specName) => ({
    ...result,
    ...(specsObj[specName] ? specs[specName] : {})
  }), {});
}

export default class MonthPickerDemo extends Component {
  constructor() {
    super();

    this.state = {
      baseline: false,
      native: false,
      messageStandard: false,
      messageCritical: false,
      messagePostive: false,
      messageAdequate: false,
      noReserveMessageSpace: false
    };

    this.toggleMessageStandard = this.toggleMessageStandard.bind(this);
    this.toggleMessageCritical = this.toggleMessageCritical.bind(this);
    this.toggleMessagePostive = this.toggleMessagePostive.bind(this);
    this.toggleMessageAdequate = this.toggleMessageAdequate.bind(this);
    this.toggleNoReserveMessageSpace = this.toggleNoReserveMessageSpace.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
    this.toggleNative = this.toggleNative.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleMessageStandard(event) {
    this.setState({
      messageStandard: event.target.checked,
      messageCritical: false,
      messagePostive: false,
      messageAdequate: false,
      noReserveMessageSpace: false
    });
  }

  toggleMessageCritical(event) {
    this.setState({
      messageStandard: false,
      messageCritical: event.target.checked,
      messagePostive: false,
      messageAdequate: false,
      noReserveMessageSpace: false
    });
  }

  toggleMessagePostive(event) {
    this.setState({
      messageStandard: false,
      messageCritical: false,
      messagePostive: event.target.checked,
      messageAdequate: false,
      noReserveMessageSpace: false
    });
  }

  toggleMessageAdequate(event) {
    this.setState({
      messageStandard: false,
      messageCritical: false,
      messagePostive: false,
      messageAdequate: event.target.checked,
      noReserveMessageSpace: false
    });
  }

  toggleNoReserveMessageSpace(event) {
    this.setState({
      messageStandard: false,
      messageCritical: false,
      messagePostive: false,
      messageAdequate: false,
      noReserveMessageSpace: event.target.checked
    });
  }

  toggleBaseline(event) {
    this.setState({
      baseline: event.target.checked
    });
  }

  toggleNative(event) {
    this.setState({
      native: event.target.checked
    });
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    const { baseline, value, native, messageStandard, messageCritical, messagePostive, messageAdequate, noReserveMessageSpace } = this.state;
    const spec = getSpec({
      default: true,
      messageCritical,
      noReserveMessageSpace
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

    if (noReserveMessageSpace) {
      message = false;
    }

    const monthPicker = (
      <SeekMonthPicker
        id="startDate"
        className={styles.input}
        message={message}
        valid={valid}
        messageProps={messageProps}
        native={native}
        value={value}
        onChange={this.handleChange}
      />
    );

    return (
      <div>
        <Baseline isVisible={baseline} color="#eee">
          <div className={styles.sandboxContainer}>
            <GridContainer>
              <div className={styles.sandbox}>
                <SandboxPreview className={styles.sandboxPreview}>
                  {monthPicker}
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
            label="Native"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: native,
              onChange: this.toggleNative
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

          <SandboxToggle
            label="Reserve No Space For Message"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: noReserveMessageSpace,
              onChange: this.toggleNoReserveMessageSpace
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
            <Code jsx={monthPicker} />
          </Section>
        </GridContainer>
      </div>
    );
  }
}
