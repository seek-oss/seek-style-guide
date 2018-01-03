import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import fixSketchRendering from './fixSketchRendering/fixSketchRendering';
import {
  PageBlock,
  Section,
  Text
} from 'seek-style-guide/react';
import styles from './SketchExports.less';

import colorsExports from '../../../../theme/**/*.sketch.js';
const colors = Object.assign({}, ...colorsExports.map(x => x.colors || {}));

import componentExports from '../../../../react/*/*.sketch.js';
const textComponents = Object.assign({}, ...componentExports.map(x => x.text || {}));
const blockSymbolComponents = Object.assign({}, ...componentExports.map(x => x.blockSymbols || {}));
const symbolComponents = Object.assign({}, ...componentExports.map(x => x.symbols || {}));

const SketchText = ({ name, children }) => (
  <div className={styles.text}>
    <div data-sketch-text={name}>
      { children }
    </div>
  </div>
);
SketchText.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const SketchColor = ({ name, value }) => (
  <div className={styles.color}>
    <div className={styles.name}>
      <Text strong>{ name }</Text>
    </div>
    <div data-sketch-color={value} className={styles.swatch} style={{ background: value }} />
  </div>
);
SketchColor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

const SketchSymbol = ({ name, children }) => (
  <div className={styles.symbol}>
    <div className={styles.name}>
      <Text strong>{ name }</Text>
    </div>
    <div data-sketch-symbol={name}>
      { children }
    </div>
  </div>
);
SketchSymbol.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default class SketchExports extends Component {
  constructor() {
    super();
    this.state = { mountIndex: 0 };
  }

  componentDidMount() {
    fixSketchRendering(this.el);

    // Force re-render so 'fixSketchRendering' runs from a blank slate for every viewport size
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    fixSketchRendering(this.el);
  }

  componentWillUnmount() {
    document.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState(state => ({ mountIndex: state.mountIndex + 1 }));
  };

  storeRef = el => {
    this.el = el;
  }

  render() {
    return (
      <div key={this.state.mountIndex} ref={this.storeRef}>
        <PageBlock>
          <Section header>
            <Text hero>Sketch Exports</Text>
          </Section>
          <Section header>
            <Text headline>Text styles</Text>
          </Section>
        </PageBlock>
        <PageBlock style={{ background: 'white' }}>
          <Section>
            {
              map(textComponents, (element, name) => (
                <SketchText key={name} name={name}>{ element }</SketchText>
              ))
            }
          </Section>
        </PageBlock>
        <PageBlock>
          <Section header>
            <Text headline>Colours</Text>
          </Section>
        </PageBlock>
        <PageBlock style={{ background: 'white' }}>
          <SketchSymbol name="colours">
            <Section>
              <div className={styles.colors}>
                {
                  map(colors, (color, name) => (
                    <SketchColor key={name} name={name} value={color} />
                  ))
                }
              </div>
            </Section>
          </SketchSymbol>
        </PageBlock>
        <PageBlock>
          <Section header>
            <Text headline>Symbols</Text>
          </Section>
        </PageBlock>
        <PageBlock style={{ background: 'white' }}>
          <Section>
            {
              map(symbolComponents, (element, name) => (
                <SketchSymbol key={name} name={name}>
                  { element }
                </SketchSymbol>
              ))
            }
          </Section>
        </PageBlock>
        <PageBlock>
          <Section header>
            <Text headline>Block Symbols</Text>
          </Section>
        </PageBlock>
        {
          map(blockSymbolComponents, (element, name) => (
            <SketchSymbol key={name} name={name}>
              { element }
            </SketchSymbol>
          ))
        }
      </div>
    );
  }
}
