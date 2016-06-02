import styles from './Typography.less';

import React, { Component } from 'react';
import classnames from 'classnames';
import Baseline from 'react-baseline';
import { StickyContainer, Sticky } from 'react-sticky';

import GridContainer from 'GridContainer/GridContainer';
import Section from 'Section/Section';
import HeadlineText from 'HeadlineText/HeadlineText';
import Spec from 'Spec/Spec';

const defaultSpec = {
  'Font Size': '10px'
};

const typeLevels = [
  {
    name: 'Hero',
    spec: {
      'Line Height': '5 grid rows',
      'Type Scale': '4.2'
    }
  },
  {
    name: 'Headline',
    spec: {
      'Line Height': '4 grid rows',
      'Type Scale': '2.8'
    }
  },
  {
    name: 'Heading',
    spec: {
      'Line Height': '3 grid rows',
      'Type Scale': '2.1'
    }
  },
  {
    name: 'Subheading',
    spec: {
      'Line Height': '3 grid rows',
      'Type Scale': '1.8'
    }
  },
  {
    name: 'Standard',
    spec: {
      'Line Height': '2 grid rows',
      'Type Scale': '1.4'
    }
  },
  {
    name: 'Small',
    spec: {
      'Line Height': '2 grid rows',
      'Type Scale': '1.2'
    }
  },
  {
    name: 'Touchable',
    spec: {
      'Line Height': '5 grid rows',
      'Type Scale': '1.8'
    }
  }
];

export default class Typography extends Component {
  constructor() {
    super();

    this.state = {
      typeLevel: typeLevels[0],
      baseline: true
    };

    this.setTypeLevel = this.setTypeLevel.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
  }

  setTypeLevel(event) {
    this.setState({
      typeLevel: typeLevels.find(typeLevel => typeLevel.name === event.target.value)
    });
  }

  toggleBaseline(event) {
    this.setState({
      baseline: event.target.checked
    });
  }

  render() {
    const { typeLevel, baseline } = this.state;
    const textContainerClassName = classnames({
      [styles.textContainerWithBaseline]: baseline,
      [styles.textContainer]: !baseline
    });
    const textClassName = classnames({
      [styles[typeLevel.name.toLowerCase() + 'Text']]: true
    });
    const spec = {
      ...typeLevel.spec,
      ...defaultSpec
    };

    return (
      <StickyContainer>
        <div>
          <Sticky className={styles.sticky}>
            <div className={styles.fixedContainer}>
              <GridContainer>
                <div className={styles.fixedContainerContent}>
                  <Baseline isVisible={baseline}>
                    <div className={textContainerClassName}>
                      <span className={textClassName}>
                        Living Style Guide
                      </span>
                    </div>
                  </Baseline>

                  <div>
                    <p>
                      <label>
                        Type Level:
                        <select onChange={this.setTypeLevel}>
                          {
                            typeLevels.map(level => (
                              <option value={level.name} key={level.name}>
                                {level.name}
                              </option>
                            ))
                          }
                        </select>
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
            </Section>
          </GridContainer>
        </div>
      </StickyContainer>
    );
  }
}
