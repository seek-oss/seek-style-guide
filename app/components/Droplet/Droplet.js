import styles from './Droplet.less';

import React, { PropTypes } from 'react';
import lessToJs from 'less-vars-to-js';

import grid from '!!raw!seek-style-guide/theme/layout/grid.less';
const gridValues = lessToJs(grid);
const rowHeight = parseInt(gridValues['@grid-row-height'], 10);

export default function Droplet({ colour, outline, outlineColour, showHex, showVariable, variableName, sizeInRows }) {
  const size = sizeInRows * rowHeight;
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
      <div className={styles.drop} style={dropletStyles} />
      {
        (showHex || showVariable) && (
          <div className={styles.hex}>
            {showHex && <p>{colour}</p>}
            {(showHex && showVariable) && ' — '}
            {showVariable && <p>{variableName}</p>}
          </div>
      )}
    </div>
  );
}

Droplet.propTypes = {
  colour: PropTypes.string,
  sizeInRows: PropTypes.number,
  showHex: PropTypes.bool,
  showVariable: PropTypes.bool,
  variableName: PropTypes.string,
  outline: PropTypes.bool,
  outlineColour: PropTypes.string
};

Droplet.defaultProps = {
  colour: '#BAD',
  sizeInRows: 6,
  showHex: false,
  showVariable: false,
  variableName: '',
  outline: false,
  outlineColour: ''
};
