import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Story from 'Story/Story';
import styles from './palette.story.less';

import lessToJs from 'less-vars-to-js';
import blackOrWhite from 'black-or-white';

import brand from '!!raw!./brand.less';
import partners from '!!raw!./partners.less';
import grays from '!!raw!./grays.less';
import elements from '!!raw!./elements.less';
import accessible from '!!raw!./accessible-variants.less';

const brandsJs = lessToJs(brand);
const partnersJs = lessToJs(partners);
const graysJs = lessToJs(grays);
const elementsJs = lessToJs(elements);
const accessiblesJs = lessToJs(accessible);

const dictionary = {
  ...brandsJs,
  ...partnersJs,
  ...graysJs,
  ...elementsJs,
  ...accessiblesJs
};

storiesOf('Colours', module)
  .add('Palette', () => getPalettes());

const getPalettes = () => (
  <Story title="Colour Palette">
    <div className={styles.story}>
    { getPalette('Brand', brandsJs) }
    { getPalette('Accessible variants', accessiblesJs) }
    { getPalette('Partner brands', partnersJs) }
    { getPalette('Elements', elementsJs) }
    { getPalette('Grays', graysJs) }
    </div>
  </Story>
);

const getPalette = (name, palette) => (
  <div className={styles.palette}>
    <h1 className={styles.name}>{name}</h1>
    <div className={styles.swatches}>
      { Object.keys(palette).map(getSwatch) }
    </div>
  </div>
);

const getSwatch = name => {
  const value = dictionary[name];
  const isVariable = value.indexOf('@') === 0;
  const colourValue = isVariable ? dictionary[value] : value;

  return (
    <div
      key={name}
      title={name.replace('@', '')}
      style={{color: blackOrWhite(colourValue), backgroundColor: colourValue}}
      className={styles.swatch}>
      <span className={styles.swatchName}>{name.replace('@', '')}</span>
      <span className={styles.swatchColour}>{value.replace('@', '')}</span>
    </div>
  );
};
