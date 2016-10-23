import styles from './Textarea.less';
import textareaStyles from 'seek-style-guide/react/fields/Textarea/Textarea.less';

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

import { Textarea as SeekTextarea } from 'seek-style-guide/react';

const specs = {
  default: {
    Height: '10 grid rows',
    'Max height': '20 grid rows',
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

export default class Textarea extends Component {
  constructor() {
    super();

    this.state = {
      focus: false,
      help: false,
      invalid: false,
      maxCharacters: false,
      showCount: false,
      baseline: false,
      inputValue: ''
    };

    this.toggleFocus = this.toggleFocus.bind(this);
    this.toggleHelp = this.toggleHelp.bind(this);
    this.toggleInvalid = this.toggleInvalid.bind(this);
    this.toggleMaxCharacters = this.toggleMaxCharacters.bind(this);
    this.toggleShowCount = this.toggleShowCount.bind(this);
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

  toggleInvalid(event) {
    this.setState({
      invalid: event.target.checked
    });
  }

  toggleMaxCharacters(event) {
    this.setState({
      maxCharacters: event.target.checked
    });
  }

  toggleShowCount(event) {
    this.setState({
      showCount: event.target.checked
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
    const { focus, help, invalid, baseline, inputValue, maxCharacters, showCount } = this.state;
    const className = classnames({
      [textareaStyles.rootFocus]: focus,
      [styles.textarea]: true
    });
    const spec = getSpec({
      default: true,
      focus,
      invalid
    });
    const countFeedback = value => {
      return {
        count: 500 - value.length
      };
    };
    const textarea = (
      <SeekTextarea
        id="description"
        className={className}
        invalid={invalid}
        label="Description"
        help={help ? 'e.g. Notes about your recent role' : ''}
        message={invalid ? 'Something went wrong' : ''}
        inputProps={{
          onChange: this.handleChange,
          value: inputValue
        }}
        {...(maxCharacters ? { maxCharacters: 500 } : {})}
        {...(showCount ? { countFeedback } : {})}
      />
    );

    return (
      <div>
        <Baseline isVisible={baseline} color="#eee">
          <div className={styles.sandboxContainer}>
            <GridContainer>
              <div className={styles.sandbox}>
                <SandboxPreview>
                  {textarea}
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
            label="Show Count"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: showCount,
              onChange: this.toggleShowCount
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
            label="Max Characters"
            toggleType="checkbox"
            toggleProps={{
              type: 'checkbox',
              checked: maxCharacters,
              onChange: this.toggleMaxCharacters
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
            <Code jsx={textarea} />
          </Section>
        </GridContainer>
      </div>
    );
  }
}
