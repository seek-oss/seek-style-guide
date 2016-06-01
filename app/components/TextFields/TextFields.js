import styles from './TextFields.less';
import textFieldStyles from 'seek-style-guide/react/fields/TextField/TextField.less';

import React, { Component } from 'react';
import Baseline from 'react-baseline';
import classnames from 'classnames';
import { StickyContainer, Sticky } from 'react-sticky';

import GridContainer from 'GridContainer/GridContainer';
import Section from 'Section/Section';
import HeadlineText from 'HeadlineText/HeadlineText';
import Spec from 'Spec/Spec';
import Code from 'Code/Code';

import { TextField } from 'seek-style-guide/react';

const loremIpsum = 'Lorem ipsum dolor sit amet, an sit quas justo, lucilius pericula no sit. In tota meis maiestatis eos, quem quod noluisse sea ea, ei pri dicta adolescens. Ad suas purto volutpat cum. Mea id tota paulo efficiantur. Ius in nisl dicam delenit. In sit summo contentiones consectetuer. His id velit vivendum patrioque, id qui delenit tincidunt posidonium.';

const specs = {
  default: {
    Height: '5 grid rows',
    'Padding left': '15px — @field-gutter-width',
    'Padding right': '15px — @field-gutter-width',
    'Margin bottom': '3 grid rows',
    'Text color': '@sk-charcoal',
    'Font scale': '1.8 — @interaction-type-scale',
    Border: '1px @sk-mid-grey-light',
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
      baseline: false
    };

    this.toggleFocus = this.toggleFocus.bind(this);
    this.toggleInvalid = this.toggleInvalid.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
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

  render() {
    const { focus, invalid, baseline } = this.state;
    const className = classnames({
      [textFieldStyles.rootFocus]: focus
    });
    const spec = getSpec({
      default: true,
      focus,
      invalid
    });
    const textfield = (
      <TextField className={className} invalid={invalid} message={invalid ? 'Something went wrong' : ''} />
    );

    return (
      <StickyContainer>
        <div>
          <Sticky className={styles.sticky}>
            <div className={styles.fixedContainer}>
              <GridContainer>
                <div className={styles.fixedContainerContent}>
                  <div className={styles.textFieldContainer}>
                    <Baseline isVisible={baseline}>
                      {textfield}
                    </Baseline>
                  </div>

                  <div>
                    <p>
                      <label>
                        <input type="checkbox" checked={focus} onChange={this.toggleFocus} /> focus
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" checked={invalid} onChange={this.toggleInvalid} /> invalid
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" checked={baseline} onChange={this.toggleBaseline} /> baseline
                      </label>
                    </p>
                  </div>
                </div>
              </GridContainer>
            </div>
          </Sticky>

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

          <GridContainer className={styles.gridContainer}>
            <Section className={styles.section}>
              <HeadlineText>Do</HeadlineText>
              <p className={styles.content}>
                {loremIpsum}
              </p>
            </Section>

            <Section className={styles.section}>
              <HeadlineText>Don't</HeadlineText>
              <p className={styles.content}>
                {loremIpsum}
              </p>
            </Section>
          </GridContainer>
        </div>
      </StickyContainer>
    );
  }
}
