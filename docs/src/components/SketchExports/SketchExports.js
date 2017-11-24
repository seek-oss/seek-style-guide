import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import {
  PageBlock,
  Section,
  Text
} from 'seek-style-guide/react';
import styles from './SketchExports.less';

import componentExports from '../../../../react/*/*.sketch.js';
const textComponents = Object.assign(...componentExports.map(x => x.text || {}));
const symbolComponents = Object.assign(...componentExports.map(x => x.symbols || {}));

const SketchExport = ({ type, name, children }) => (
  <div className={styles[type] || ''}>
    {
      type === 'text' ? null : (
        <div className={styles.name}>
          <Text strong>{ name }</Text>
        </div>
      )
    }
    <div {...{ [`data-sketch-${type}`]: name }}>
      { children }
    </div>
  </div>
);
SketchExport.propTypes = {
  type: PropTypes.oneOf(['text', 'symbol']).isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default () => (
  <div>
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
            <SketchExport key={name} type="text" name={name}>
              { element }
            </SketchExport>
          ))
        }
      </Section>
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
            <SketchExport key={name} type="symbol" name={name}>
              { element }
            </SketchExport>
          ))
        }
      </Section>
    </PageBlock>
  </div>
);
