// Originally copied from https://github.com/moroshko/react-baseline
// to support React v16, but this feels more like internal code anyway.

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import lessToJs from 'less-vars-to-js';
import grid from '!!raw-loader!seek-style-guide/theme/layout/grid.less';
const gridValues = lessToJs(grid);
const rowHeight = parseInt(gridValues['@grid-row-height'], 10);

function calculateBackground(type, lineHeight, color) {
  if (type === 'line') {
    const percentage = (lineHeight - 1) / lineHeight * 100;

    return {
      backgroundSize: `100% ${lineHeight}px`,
      backgroundImage: `linear-gradient(to bottom, transparent 0%, transparent ${percentage}%, ${color} ${percentage}%, ${color} 100%)`
    };
  }

  return {
    backgroundSize: `100% ${lineHeight * 2}px`,
    backgroundImage: `linear-gradient(to bottom, ${color} 50%, transparent 50%, transparent 100%)`
  };
}

function Baseline(props) {
  const { isVisible, type, lineHeight, color, children, style, ...restProps } = props;
  const baselineStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    pointerEvents: 'none',
    ...calculateBackground(type, lineHeight, color)
  };
  const rootProps = {
    ...restProps,
    style: { ...style, position: 'relative' }
  };

  return (
    <div {...rootProps}>
      { isVisible && <div style={baselineStyle} /> }
      {Children.only(children)}
    </div>
  );
}

Baseline.propTypes = {
  isVisible: PropTypes.bool,
  type: PropTypes.string,
  lineHeight: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object
};

Baseline.defaultProps = {
  isVisible: true,
  type: 'line',
  lineHeight: rowHeight,
  color: 'rgba(0, 0, 0, 0.15)',
  style: {}
};

export default Baseline;
