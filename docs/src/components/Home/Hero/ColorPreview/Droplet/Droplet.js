import styles from './Droplet.less';

import React from 'react';
import PropTypes from 'prop-types';

import lessToJs from 'less-vars-to-js';

import grid from '!!raw-loader!seek-style-guide/theme/layout/grid.less';
const gridValues = lessToJs(grid);
const rowHeight = parseInt(gridValues['@row-height'], 10);

export default function Droplet({ color, outline, outlineColor, showHex, showVariable, variableName, sizeInRows }) {
  const size = sizeInRows * rowHeight;
  const outlineStyles = outline ?
    { boxShadow: `0 0 1px 0 ${outlineColor}` } :
    {};
  const dropletStyles = {
    height: `${size}px`,
    width: `${size}px`,
    backgroundColor: color,
    ...outlineStyles
  };

  return (
    <div className={styles.root}>
      <div className={styles.drop} style={dropletStyles} />
      {
        (showHex || showVariable) ?
          <div className={styles.hex}>
            {showHex ? <p>{color}</p> : null}
            {(showHex && showVariable) ? ' — ' : null}
            {showVariable ? <p>{variableName}</p> : null}
          </div> :
          null
      }
    </div>
  );
}

Droplet.propTypes = {
  color: PropTypes.string,
  sizeInRows: PropTypes.number,
  showHex: PropTypes.bool,
  showVariable: PropTypes.bool,
  variableName: PropTypes.string,
  outline: PropTypes.bool,
  outlineColor: PropTypes.string
};

Droplet.defaultProps = {
  color: '#BAD',
  sizeInRows: 6,
  showHex: false,
  showVariable: false,
  variableName: '',
  outline: false,
  outlineColor: ''
};
