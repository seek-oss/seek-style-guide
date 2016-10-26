import styles from './DropDown.less';
import dropdownStyles from 'seek-style-guide/react/fields/Dropdown/Dropdown.less';

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

import { Dropdown as SeekDropDown } from 'seek-style-guide/react';

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

export default class DropDownDemo extends Component {
  constructor() {
    super();

    this.state = {
      focus: false,
      invalid: false,
      baseline: false,
      help: false,
      inputValue: ''
    };

    this.toggleFocus = this.toggleFocus.bind(this);
    this.toggleInvalid = this.toggleInvalid.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
    this.toggleHelp = this.toggleHelp.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  toggleHelp(event) {
    this.setState({
      help: event.target.checked
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
    const { focus, invalid, baseline, help, inputValue } = this.state;
    const className = classnames({
      [styles.input]: true,
      [dropdownStyles.rootFocus]: focus
    });
    const spec = getSpec({
      default: true,
      focus,
      invalid
    });
    const options = [
      {
        value: '1',
        label: 'Developer'
      },
      {
        value: '2',
        label: 'Tester'
      },
      {
        value: '3',
        label: 'Product Manager'
      }
    ];
    const dropdown = (
      <SeekDropDown
        id="jobTitles"
        className={className}
        invalid={invalid}
        label="Job Titles"
        focus={focus}
        message={invalid ? 'Something went wrong' : ''}
        help={help ? 'eg. Product Manager' : ''}
        options={options}
        placeholder="Select a job title..."
        inputProps={{
          onChange: this.handleChange,
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
                  {dropdown}
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
          <SandboxToggle
            label="Help"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: help,
              onChange: this.toggleHelp
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
            <Code jsx={dropdown} />
          </Section>
        </GridContainer>
      </div>
    );
  }
}
