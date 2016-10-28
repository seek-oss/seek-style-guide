import styles from './Checkbox.less';
import checkboxStyles from 'seek-style-guide/react/fields/Checkbox/Checkbox.less';

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

import { Checkbox as SeekCheckbox } from 'seek-style-guide/react';

const specs = {
  default: {
    'Internal gutters': '15px — @field-gutter-width',
    'Margin bottom': '3 grid rows',
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

export default class Checkbox extends Component {
  constructor() {
    super();

    this.state = {
      focus: false,
      help: false,
      invalid: false,
      maxCharacters: false,
      showCount: false,
      baseline: false,
      inputValue: true
    };

    this.toggleFocus = this.toggleFocus.bind(this);
    this.toggleHelp = this.toggleHelp.bind(this);
    this.toggleInvalid = this.toggleInvalid.bind(this);
    this.toggleDisabled = this.toggleDisabled.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleFocus(event) {
    this.setState({
      focus: event.target.checked
    });
  }

  toggleHelp(event) {
    this.setState({
      help: event.target.checked
    });
  }

  toggleDisabled(event) {
    this.setState({
      disabled: event.target.checked
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

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    const { focus, help, invalid, baseline, inputValue, disabled } = this.state;
    // const className = classnames({
    //   [checkboxStyles.rootFocus]: focus,
    //   [styles.textarea]: true
    // });
    const spec = getSpec({
      default: true,
      focus,
      invalid
    });
    // checked: inputValue

    const checkbox = (
      <SeekCheckbox
        label="Functional"
        inputProps={{
          onChange: (a, b, c, d) => {
            console.log('change', a, b, c, d);
          },
          value: inputValue
        }}
      />
    );

    return (
      <div>
        <Baseline isVisible={baseline} color="#eee">
          <div className={styles.sandboxContainer}>
            <GridContainer>
              <div className={styles.sandbox}>
                <SandboxPreview>
                  {checkbox}
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
            label="Help"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: help,
              onChange: this.toggleHelp
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
          <SandboxToggle
            label="Disabled"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: disabled,
              onChange: this.toggleDisabled
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
            <Code jsx={checkbox} />
          </Section>
        </GridContainer>
      </div>
    );
  }
}
