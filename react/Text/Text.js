import styles from './Text.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import stylesPositive from '../Positive/Positive.less';
import stylesCritical from '../Critical/Critical.less';
import stylesSecondary from '../Secondary/Secondary.less';
import stylesStrong from '../Strong/Strong.less';
import stylesSemiStrong from '../SemiStrong/SemiStrong.less';
import stylesRegular from '../Regular/Regular.less';

export default function Text({
  children,
  className,
  screaming,
  yelling,
  shouting,
  waving,
  whistling,
  whisperingTitle,
  loud,
  intimate,
  whispering,
  raw,
  positive,
  critical,
  secondary,
  strong,
  semiStrong,
  regular,
  light,
  baseline,
  ...restProps
}) {
  return (
    <span
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [className]: className,
        [styles.screaming]: screaming,
        [styles.yelling]: yelling,
        [styles.shouting]: shouting,
        [styles.waving]: waving,
        [styles.whistling]: whistling,
        [styles.whiserpingTitle]: whisperingTitle,
        [styles.loud]: loud,
        [styles.intimate]: intimate,
        [styles.whispering]: whispering,
        [styles.raw]: raw,
        [styles.baseline]: baseline
      })}>
      <span
        className={classnames({
          [stylesPositive.root]: positive,
          [stylesCritical.root]: critical,
          [stylesSecondary.root]: secondary,
          [stylesStrong.root]: strong,
          [stylesSemiStrong.root]: semiStrong,
          [stylesRegular.root]: regular,
          [styles.light]: light
        })}>
        {children}
      </span>
    </span>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  screaming: PropTypes.bool,
  yelling: PropTypes.bool,
  shouting: PropTypes.bool,
  waving: PropTypes.bool,
  whistling: PropTypes.bool,
  whisperingTitle: PropTypes.bool,
  loud: PropTypes.bool,
  intimate: PropTypes.bool,
  whispering: PropTypes.bool,
  raw: PropTypes.bool,
  positive: PropTypes.bool,
  critical: PropTypes.bool,
  secondary: PropTypes.bool,
  strong: PropTypes.bool,
  semiStrong: PropTypes.bool,
  regular: PropTypes.bool,
  light: PropTypes.bool,
  baseline: PropTypes.bool
};

Text.defaultProps = {
  baseline: true
};
