import styles from './ColourPalette.less';

import React from 'react';

import lessToJs from 'less-vars-to-js';
import blackOrWhite from 'black-or-white';
import Droplet from 'Droplet/Droplet';

import brand from '!!raw!seek-style-guide/theme/palette/brand.less';
import elements from '!!raw!seek-style-guide/theme/palette/elements.less';
import greys from '!!raw!seek-style-guide/theme/palette/grays.less';
import partners from '!!raw!seek-style-guide/theme/palette/partners.less';

const brandsJs = lessToJs(brand);
const elementsJs = lessToJs(elements);
const greysJs = lessToJs(greys);
const partnersJs = lessToJs(partners);

const dictionary = {
  ...brandsJs,
  ...partnersJs,
  ...greysJs,
  ...elementsJs
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
  const colour = getSwatchStyle(name).backgroundColor;

  return (
    <div className={styles.swatch}>
      <Droplet colour={colour} sizeInRows={7} />
    </div>
  );
};

const getPalette = (name, palette) => (
  <div className={styles.palette}>
    <div className={styles.paletteTitle}>{name}</div>
    <div className={styles.swatches}>
      { Object.keys(palette).map(getSwatch) }
    </div>
  </div>
);

export default function ColourPalette() {
  return (
    <div>
      { getPalette('Greys', greysJs) }
      { getPalette('Elements', elementsJs) }
      { getPalette('Partners', partnersJs) }
      { getPalette('Brand', brandsJs) }
    </div>
  );
}
