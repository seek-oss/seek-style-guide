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
    'Font scale': '1.8 — @interaction-type-scale',
    Border: '1px — @sk-mid-gray-light',
    'Border radius': '2px — @field-border-radius'
  },
  focus: {
    Border: '1px @sk-focus'
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
    this.toggleBaseline = this.toggleBaseline.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({
      inputValue: event.target.checked
    });
  }

  render() {
    const { baseline, inputValue, focus } = this.state;

    const spec = getSpec({
      default: true,
      focus
    });

    const classNames = classnames({
      [checkboxStyles.rootFocus]: focus
    });

    const checkbox = (
      <SeekCheckbox
        className={classNames}
        label="Still in role"
        id="still-in-role"
        inputProps={{
          onChange: this.handleChange,
          checked: inputValue
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
