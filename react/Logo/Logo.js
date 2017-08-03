import styles from './Logo.less';
import SeekName from './SeekName.js';
import SeekLogo from './SeekLogo.js';

import React from 'react';
import PropTypes from 'prop-types';

import omit from 'lodash/omit';

import classnames from 'classnames';

const CIRCLES_CLASS_PROP_KEY = 'circleClass';
const DOTS_CLASS_PROP_KEY = 'dotClass';
const NAME_CLASS_PROP_KEY = 'nameClass';

const viewportDimensions = type => ({
  default: { height: '63px', width: '159px' },
  compact: { height: '63px', width: '63px' }
})[type];

export default function Logo({ svgClassName, invert, compact, svgElementClasses, ...restProps }) {
  const svgClasses = classnames(svgClassName, {
    [styles.root]: true,
    [styles.invert]: invert
  });

  return (
    <div {...restProps}>
      <svg
        className={svgClasses}
        id="sk-logo-pos"
        xmlns="http://www.w3.org/2000/svg"
        height={viewportDimensions(compact && 'compact' || 'default').height}
        viewBox="0 0 212.789 83.777"
        width={viewportDimensions(compact && 'compact' || 'default').width}
        y="0px"
        x="0px">
        { !compact ? <SeekName {...omit(svgElementClasses, [CIRCLES_CLASS_PROP_KEY, DOTS_CLASS_PROP_KEY])} /> : null }
        <SeekLogo {...omit(svgElementClasses, [NAME_CLASS_PROP_KEY])} />
      </svg>
    </div>
  );
}

Logo.propTypes = {
  svgClassName: PropTypes.string,
  invert: PropTypes.bool,
  compact: PropTypes.bool,
  className: PropTypes.string,
  svgElementClasses: PropTypes.shape({
    nameClass: PropTypes.string,
    circleClass: PropTypes.string,
    dotClass: PropTypes.string
  })
};

Logo.defaultProps = {
  svgClassName: '',
  className: ''
};
