import React, { Component } from 'react';
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
const blockSymbolComponents = Object.assign(...componentExports.map(x => x.blockSymbols || {}));
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
      {...{ [`data-sketch-${type}`]: type === 'color' ? value : `SEEK Style Guide/${name}` }}
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

const isElementHidden = el => {
  const style = window.getComputedStyle(el);

  return (
    (style.position === 'absolute' && style.opacity === '0') ||
    style.clip === 'rect(1px 1px 1px 1px)' // From ScreenReaderOnly.less
  );
};

export default class SketchExports extends Component {
  componentDidMount() {
    // Require canvg dynamically because it can't run in a Node context
    const canvg = require('canvg-fixed');

    // Total hack to remove visually-hidden elements that html-sketchapp erroneously renders
    Array.from(this.el.querySelectorAll('*')).forEach(el => {
      if (isElementHidden(el)) {
        el.parentNode.removeChild(el);
      }
    });

    // Another total hack until html-sketchapp supports SVG
    // GitHub Issue: https://github.com/brainly/html-sketchapp/issues/4
    Array.from(this.el.querySelectorAll('svg')).forEach(svg => {
      const style = window.getComputedStyle(svg);

      // Ensure cascading colours are transferred onto the SVG itself
      svg.setAttribute('fill', style.fill);
      svg.setAttribute('stroke', style.stroke);
      Array.from(svg.querySelectorAll('path')).forEach(path => {
        const pathStyle = window.getComputedStyle(path);
        path.setAttribute('fill', pathStyle.fill);
        path.setAttribute('stroke', pathStyle.stroke);
      });

      // Quadruple the SVG's size so we can maintain quality
      const scale = 4;
      const width = parseInt(style.width, 10) * scale;
      const height = parseInt(style.height, 10) * scale;
      svg.style.width = `${width}px`;
      svg.style.height = `${height}px`;

      // Parse SVG to canvas
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvg(canvas, svg.outerHTML);

      // Replace original SVG with an image
      const img = new Image();
      img.src = canvas.toDataURL();
      img.classList = svg.classList;
      img.style.width = width / scale;
      img.style.height = height / scale;
      svg.parentNode.replaceChild(img, svg);
    });
  }

  storeRef = el => {
    this.el = el;
  }

  render() {
    return (
      <div ref={this.storeRef}>
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
        <PageBlock>
          <Section header>
            <Text headline>Block Symbols</Text>
          </Section>
        </PageBlock>
        {
          map(blockSymbolComponents, (element, name) => (
            <SketchExport key={name} type="symbol" name={name} value={element} />
          ))
        }
      </div>
    );
  }
}
