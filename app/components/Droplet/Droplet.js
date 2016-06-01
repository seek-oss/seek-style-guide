import styles from './Droplet.less';

import React, { PropTypes } from 'react';
import lessToJs from 'less-vars-to-js';

import grid from '!!raw!seek-style-guide/theme/layout/grid.less';
const gridValues = lessToJs(grid);
const rowHeight = parseInt(gridValues['@grid-row-height'], 10);

export default function Droplet({ colour, showHex, sizeInRows }) {
  const size = (sizeInRows * rowHeight);

  return (
    <div className={styles.root}>
      <div
        className={styles.drop}
        style={{
          height: `${size}px`,
          width: `${size}px`,
          backgroundColor: colour
        }}
      />
      { showHex && <p className={styles.hex}>{colour}</p>}
    </div>
  );
}

Droplet.propTypes = {
  colour: PropTypes.string.isRequired,
  sizeInRows: PropTypes.number,
  showHex: PropTypes.bool
};

Droplet.defaultProps = {
  colour: PropTypes.string,
  sizeInRows: 6,
  showHex: false
};
