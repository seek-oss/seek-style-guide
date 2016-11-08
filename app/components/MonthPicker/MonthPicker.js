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

export default class MonthPickerDemo extends Component {
  constructor() {
    super();

    this.state = {
      invalid: false,
      baseline: false,
      native: false
    };

    this.toggleInvalid = this.toggleInvalid.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
    this.toggleNative = this.toggleNative.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  toggleNative(event) {
    this.setState({
      native: event.target.checked
    });
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    const { invalid, baseline, value, native } = this.state;
    const spec = getSpec({
      default: true,
      invalid
    });
    const monthPicker = (
      <SeekMonthPicker
        id="startDate"
        className={styles.input}
        invalid={invalid}
        message={invalid ? 'Something went wrong' : ''}
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
                <SandboxPreview>
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
            label="Invalid"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: invalid,
              onChange: this.toggleInvalid
            }}
          />
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
