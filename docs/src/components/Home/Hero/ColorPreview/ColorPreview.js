import styles from './ColorPreview.less';

import React from 'react';
import lessToJs from 'less-vars-to-js';

import Droplet from './Droplet/Droplet';
import brand from '!!raw-loader!seek-style-guide/theme/palette/brand.less';
const brandValues = lessToJs(brand);

const getSwatch = name => {
  const value = brandValues[name];

  return (
    <div className={styles.drop} key={name}>
      <Droplet
        color={value}
        sizeInRows={8}
        showHex={true}
      />
    </div>
  );
};

export default function ColorPreview() {
  return (
    <div>
      {
        Object.keys(brandValues)
          .slice(0, 3)
          .map(getSwatch)
      }
    </div>
  );
}
