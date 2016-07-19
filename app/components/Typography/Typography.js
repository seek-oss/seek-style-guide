import styles from './Typography.less';

import React, { Component } from 'react';
import basekick from 'basekick';
import Baseline from 'react-baseline';

import GridContainer from 'GridContainer/GridContainer';
import SandboxPreview from 'SandboxPreview/SandboxPreview';
import SandboxTogglePanel from 'SandboxTogglePanel/SandboxTogglePanel';
import SandboxToggle from 'SandboxToggle/SandboxToggle';
import Section from 'Section/Section';
import HeadlineText from 'HeadlineText/HeadlineText';
import Spec from 'Spec/Spec';
import Code from 'Code/Code';

const defaultSpec = {
  'Font Size': '10px — @base-font-size'
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
    const typeLevel = typeLevels.find(level => level.name === event.target.value);
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
    const typeScaleFloat = parseFloat(typeLevel.spec['Type Scale'], 10);
    const minTypeScale = typeScaleFloat - 1;
    const maxTypeScale = typeScaleFloat + 1;
    const spec = {
      ...typeLevel.spec,
      'Type Scale': typeScale,
      ...defaultSpec
    };
    const typeSizeModifier = parseFloat(typeScale, 10);
    const baseFontSize = 10;
    const textStyles = typeLevel.name === 'Touchable' ? {
      fontSize: `${typeSizeModifier * baseFontSize}px`,
      lineHeight: '45px',
      height: '45px'
    } :
    basekick({
      baseFontSize,
      descenderHeightScale: 0.12,
      gridRowHeight: 9,
      typeSizeModifier,
      typeRowSpan: parseInt(spec['Line Height'], 10)
    });
    const lessCode = `${typeLevel.name.toLowerCase()}Text(${typeSizeModifier === typeScaleFloat ? '' : typeSizeModifier});`;

    return (
      <div>
        <Baseline isVisible={baseline} color="#eee">
          <div className={styles.sandboxContainer}>
            <GridContainer>
              <div className={styles.sandbox}>
                <SandboxPreview>
                  <div className={styles.textContainer}>
                    <p className={styles.previewText} style={textStyles}>
                      Living Style Guide
                    </p>
                  </div>
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
            toggleType="select"
            toggleProps={{
              options: typeLevels.map(({ name }) => ({ name, value: name })),
              onChange: this.setTypeLevel
            }}
          />
          {
            isTypeScaleConfigurable ?
              <div style={{ display: 'inline-block' }}>
                <div className={styles.divider} />
                <SandboxToggle
                  label="Type Scale"
                  toggleType="range"
                  toggleProps={{
                    type: 'range',
                    min: minTypeScale,
                    max: maxTypeScale,
                    step: '0.1',
                    value: typeScale,
                    onChange: this.setTypeScale
                  }}
                />
              </div> :
              null
          }
        </SandboxTogglePanel>

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
    );
  }
}
