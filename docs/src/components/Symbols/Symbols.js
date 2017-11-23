import React from 'react';
import PropTypes from 'prop-types';

import {
  PageBlock,
  Section,
  Text
} from 'seek-style-guide/react';
import styles from './Symbols.less';

import symbolsExports from '../../../../react/*/*.symbols.js';
const symbolComponents = symbolsExports.map(x => x.default);

const SketchSymbol = ({ name, children }) => (
  <div className={styles.sketchSymbol}>
    <div className={styles.symbolName}>
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

export default () => (
  <PageBlock>
    <Section>
      <Text hero>Symbols</Text>
    </Section>
    {
      symbolComponents.map((SymbolComponent, i) => (
        <Section key={i}>
          <SymbolComponent {...{ SketchSymbol }} />
        </Section>
      ))
    }
  </PageBlock>
);
