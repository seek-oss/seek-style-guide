import styles from './Typography.less';

import React, { Component } from 'react';
import classnames from 'classnames';
import basekick from 'basekick';
import Baseline from 'react-baseline';
import { StickyContainer, Sticky } from 'react-sticky';

import GridContainer from 'GridContainer/GridContainer';
import Section from 'Section/Section';
import HeadlineText from 'HeadlineText/HeadlineText';
import Spec from 'Spec/Spec';
import Code from 'Code/Code';

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
      typeScale: typeLevels[0].spec['Type Scale'],
      baseline: true
    };

    this.setTypeLevel = this.setTypeLevel.bind(this);
    this.setTypeScale = this.setTypeScale.bind(this);
    this.toggleBaseline = this.toggleBaseline.bind(this);
  }

  setTypeLevel(event) {
    const typeLevel = typeLevels.find(typeLevel =>
      typeLevel.name === event.target.value
    );
    const typeScale = typeLevel.spec['Type Scale'];

    this.setState({
      typeLevel,
      typeScale
    });
  }

  setTypeScale(event) {
    this.setState({
      typeScale: event.target.value
    });
  }

  toggleBaseline(event) {
    this.setState({
      baseline: event.target.checked
    });
  }

  render() {
    const { typeLevel, typeScale, baseline } = this.state;
    const isTypeScaleConfigurable = typeLevel.name === 'Standard' || typeLevel.name === 'Touchable';
    const textContainerClassName = classnames({
      [styles.textContainerWithBaseline]: baseline,
      [styles.textContainer]: !baseline
    });
    const typeScaleFloat = parseFloat(typeLevel.spec['Type Scale'], 10);
    const minTypeScale = typeScaleFloat - 1;
    const maxTypeScale = typeScaleFloat + 1;
    const spec = {
      ...typeLevel.spec,
      'Type Scale': typeScale,
      ...defaultSpec
    };
    const typeSizeModifier = parseFloat(typeScale, 10);
    const textStyles = basekick({
      baseFontSize: 10,
      descenderHeightScale: 0.12,
      gridRowHeight: 9,
      typeSizeModifier,
      typeRowSpan: parseInt(spec['Line Height'], 10)
    });
    const lessCode = `.${typeLevel.name.toLowerCase()}Text(${typeSizeModifier === typeScaleFloat ? '' : typeSizeModifier})`;

    return (
      <StickyContainer>
        <div>
          <Sticky className={styles.sticky}>
            <div className={styles.fixedContainer}>
              <GridContainer>
                <div className={styles.fixedContainerContent}>
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
                    {
                      isTypeScaleConfigurable &&
                        <p>
                          <label>
                            Type Scale:
                            <input
                              type="range"
                              min={minTypeScale}
                              max={maxTypeScale}
                              step="0.1"
                              value={typeScale}
                              onChange={this.setTypeScale}
                            />
                          </label>
                        </p>
                    }
                    <p>
                      <label>
                        <input type="checkbox" checked={baseline} onChange={this.toggleBaseline} /> baseline
                      </label>
                    </p>
                  </div>

                  <Baseline isVisible={baseline}>
                    <div className={textContainerClassName}>
                      <p style={textStyles}>
                        Living Style Guide
                      </p>
                    </div>
                  </Baseline>
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
              <Code less={lessCode} />
            </Section>
          </GridContainer>
        </div>
      </StickyContainer>
    );
  }
}
