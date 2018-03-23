import styles from './ColorPreview.less';

import React from 'react';
import lessToJs from 'less-vars-to-js';

import Droplet from './Droplet/Droplet';
import elements from '!!raw-loader!seek-asia-style-guide/theme/palette/elements.less';
const elementsValues = lessToJs(elements);

const getSwatch = name => {
  const value = elementsValues[name];

  return (
    <div className={styles.drop} key={name}>
      <Droplet
        color={value}
        sizeInRows={5}
        showHex={true}
      />
    </div>
  );
};

export default function ColorPreview() {
  return (
    <div>
      {
        Object.keys(elementsValues)
          .filter(function(k) {
            return k.indexOf('@action') === 0;
          })
          .slice(0, 5)
          .map(getSwatch)
      }
    </div>
  );
}
