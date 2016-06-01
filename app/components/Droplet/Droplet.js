import styles from './Droplet.less';

import React, { PropTypes } from 'react';
import lessToJs from 'less-vars-to-js';

import grid from '!!raw!seek-style-guide/theme/layout/grid.less';
const gridValues = lessToJs(grid);
const rowHeight = parseInt(gridValues['@grid-row-height'], 10);

export default function Droplet({ colour, outline, outlineColour, showHex, sizeInRows }) {
  const size = (sizeInRows * rowHeight);
  const outlineStyles = outline ?
    { boxShadow: `0 0 1px 0 ${outlineColour}` } :
    {};
  const dropletStyles = {
    height: `${size}px`,
    width: `${size}px`,
    backgroundColor: colour,
    ...outlineStyles
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.drop}
        style={dropletStyles}
      />
      { showHex && <p className={styles.hex}>{colour}</p>}
    </div>
  );
}

Droplet.propTypes = {
  colour: PropTypes.string.isRequired,
  sizeInRows: PropTypes.number,
  showHex: PropTypes.bool,
  outline: PropTypes.bool,
  outlineColour: PropTypes.string
};

Droplet.defaultProps = {
  colour: PropTypes.string,
  sizeInRows: 6,
  showHex: false,
  outline: false,
  outlineColour: ''
};
