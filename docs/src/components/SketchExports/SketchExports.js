import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import {
  PageBlock,
  Section,
  Text
} from 'seek-style-guide/react';
import styles from './SketchExports.less';

import colorsExports from '../../../../theme/**/*.sketch.js';
const colors = Object.assign(...colorsExports.map(x => x.colors || {}));

import componentExports from '../../../../react/*/*.sketch.js';
const textComponents = Object.assign(...componentExports.map(x => x.text || {}));
const symbolComponents = Object.assign(...componentExports.map(x => x.symbols || {}));

const SketchExport = ({ type, name, value }) => (
  <div className={styles[type] || ''}>
    {
      type === 'text' ? null : (
        <div className={styles.name}>
          <Text strong>{ name }</Text>
        </div>
      )
    }
    <div
      className={styles.value}
      {...{ [`data-sketch-${type}`]: type === 'color' ? value : name }}
      {...(type !== 'color' ? {} : { style: { background: value } })}>
      { typeof value === 'string' ? null : value }
    </div>
  </div>
);
SketchExport.propTypes = {
  type: PropTypes.oneOf(['text', 'color', 'symbol']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
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
            <SketchExport key={name} type="text" name={name} value={element} />
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
      <Section>
        <div className={styles.colors}>
          {
            map(colors, (color, name) => (
              <SketchExport key={name} type="color" name={name} value={color} />
            ))
          }
        </div>
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
            <SketchExport key={name} type="symbol" name={name} value={element} />
          ))
        }
      </Section>
    </PageBlock>
  </div>
);
