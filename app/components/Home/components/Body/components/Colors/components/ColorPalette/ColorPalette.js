import styles from './ColorPalette.less';

import React from 'react';

import lessToJs from 'less-vars-to-js';
import blackOrWhite from 'black-or-white';
import Droplet from 'Droplet/Droplet';

import brand from '!!raw!seek-style-guide/theme/palette/brand.less';
import elements from '!!raw!seek-style-guide/theme/palette/elements.less';
import grays from '!!raw!seek-style-guide/theme/palette/grays.less';
import partners from '!!raw!seek-style-guide/theme/palette/partners.less';

const brandsJs = lessToJs(brand);
const elementsJs = lessToJs(elements);
const graysJs = lessToJs(grays);
const partnersJs = lessToJs(partners);

const dictionary = {
  ...brandsJs,
  ...partnersJs,
  ...graysJs,
  ...elementsJs
};

const lookupValue = value => {
  const isVariable = value.indexOf('@') === 0;

  return isVariable ? dictionary[value] : value;
};

const getSwatchStyle = name => {
  const value = dictionary[name];
  const backgroundColor = lookupValue(value);
  const outline = blackOrWhite(backgroundColor, 10) === '#000' ? 'rgba(0, 0, 0, 0.2)' : '';

  return { outline, backgroundColor };
};

const getSwatch = name => {
  const { backgroundColor, outline } = getSwatchStyle(name);

  return (
    <div className={styles.swatch} key={name}>
      <Droplet
        color={backgroundColor}
        sizeInRows={7}
        outline={outline !== ''}
        outlineColor={outline}
      />
    </div>
  );
};

const getPalette = (name, palette) => (
  <div className={styles.palette}>
    <div className={styles.paletteTitle}>{name}</div>
    <div className={styles.swatches}>
      {Object.keys(palette).map(getSwatch)}
    </div>
  </div>
);

export default function ColorPalette() {
  return (
    <div>
      {getPalette('Grays', graysJs)}
      {getPalette('Elements', elementsJs)}
      {getPalette('Partners', partnersJs)}
      {getPalette('Brand', brandsJs)}
    </div>
  );
}
