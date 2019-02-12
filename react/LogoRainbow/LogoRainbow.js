import styles from './LogoRainbow.less';
import LogoRainbowText from './LogoRainbowText';
import LogoRainbowIcon from './LogoRainbowIcon';
import Logo from '../Logo/Logo';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

const viewportDimensions = type =>
  ({
    default: { height: 68.031, width: 170.079 },
    compact: { height: 68.031, width: 68.031 }
  }[type]);

const getViewPortDimension = (type, dimension) =>
  viewportDimensions(type)[dimension];

export default function LogoRainbow({
  locale,
  svgClassName,
  invert,
  compact,
  textClass,
  ...restProps
}) {
  if (locale === 'NZ') {
    return (
      <Logo
        {...{
          locale,
          svgClassName,
          invert,
          compact,
          textClass,
          ...restProps
        }}
      />
    );
  }

  const svgClasses = classnames(svgClassName, {
    [styles.root]: true,
    [styles.invert]: invert
  });
  const type = (compact && 'compact') || 'default';
  const height = getViewPortDimension(type, 'height');
  const width = getViewPortDimension(type, 'width');

  return (
    <div {...restProps}>
      <svg
        className={svgClasses}
        id="sk-logo-pos"
        xmlns="http://www.w3.org/2000/svg"
        height={`${height}`}
        viewBox={`0 0 ${width} ${height}`}
        width={`${width}px`}
        y="0px"
        x="0px"
      >
        {!compact ? (
          <LogoRainbowText
            textClass={(invert && styles.invertedLogoText) || textClass}
          />
        ) : null}
        <LogoRainbowIcon />
      </svg>
    </div>
  );
}

LogoRainbow.propTypes = {
  locale: PropTypes.oneOf(['AU', 'NZ']),
  svgClassName: PropTypes.string,
  invert: PropTypes.bool,
  compact: PropTypes.bool,
  className: PropTypes.string,
  textClass: PropTypes.string
};

LogoRainbow.defaultProps = {
  locale: 'AU',
  svgClassName: '',
  className: '',
  textClass: styles.logoText
};
