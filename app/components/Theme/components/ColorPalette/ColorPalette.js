import styles from './ColorPalette.less';

import React from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';
import lessToJs from 'less-vars-to-js';
import blackOrWhite from 'black-or-white';

import accessible from '!!raw!seek-style-guide/theme/palette/accessible-variants.less';
import brand from '!!raw!seek-style-guide/theme/palette/brand.less';
import elements from '!!raw!seek-style-guide/theme/palette/elements.less';
import grays from '!!raw!seek-style-guide/theme/palette/grays.less';
import partners from '!!raw!seek-style-guide/theme/palette/partners.less';

const accessiblesJs = lessToJs(accessible);
const brandsJs = lessToJs(brand);
const elementsJs = lessToJs(elements);
const graysJs = lessToJs(grays);
const partnersJs = lessToJs(partners);

const dictionary = {
  ...brandsJs,
  ...partnersJs,
  ...graysJs,
  ...elementsJs,
  ...accessiblesJs
};

const lookupValue = value => {
  const isVariable = value.indexOf('@') === 0;

  return isVariable ? dictionary[value] : value;
};

const getAccessibleSwatchStyle = name => {
  const color = dictionary[name];
  const backgroundValue = `@sk-${name.split('-on-')[1]}`;
  const backgroundColor = lookupValue(backgroundValue);

  return { color, backgroundColor };
};

const getStandardSwatchStyle = name => {
  const value = dictionary[name];
  const backgroundColor = lookupValue(value);
  const color = blackOrWhite(backgroundColor);

  return { color, backgroundColor };
};

const isAccessible = name => /-on-/.test(name);

const getSwatchStyle = name => isAccessible(name) ?
  getAccessibleSwatchStyle(name) :
  getStandardSwatchStyle(name);

const getSwatch = name => {
  const value = dictionary[name];

  return (
    <CopyToClipboard text={name} key={name}>
      <div
        className={styles.swatch}
        style={getSwatchStyle(name)}
        title={`Click to copy ${name}`}>
        <span className={styles.swatchName}>{name.replace('@', '')}</span>
        <span className={styles.swatchColour}>{value.replace('@', '')}</span>
      </div>
    </CopyToClipboard>
  );
};

const getPalette = (name, palette) => (
  <div className={styles.palette}>
    <h1 className={styles.name}>
      {name}
    </h1>
    <div className={styles.swatches}>
      {Object.keys(palette).map(getSwatch)}
    </div>
  </div>
);

export default function ColorPalette() {
  return (
    <div>
      <h1 className={styles.heading}>Color Palette</h1>
      <div className={styles.content}>
        { getPalette('Brand', brandsJs) }
        { getPalette('Accessible variants', accessiblesJs) }
        { getPalette('Partner brands', partnersJs) }
        { getPalette('Elements', elementsJs) }
        { getPalette('Grays', graysJs) }
      </div>
    </div>
  );
}
