import styles from './BrandColours.less';

import React from 'react';
import lessToJs from 'less-vars-to-js';

import Droplet from 'Droplet/Droplet';
import brand from '!!raw!seek-style-guide/theme/palette/brand.less';
const brandValues = lessToJs(brand);

const getSwatch = name => {
  const value = brandValues[name];

  return (
    <div className={styles.drop} key={name}>
      <Droplet
        colour={value}
        sizeInRows={5}
        showHex={true}
      />
    </div>
  );
};

export default function BrandColours() {
  return (
    <div>
      {Object.keys(brandValues).map(getSwatch)}
    </div>
  );
}
