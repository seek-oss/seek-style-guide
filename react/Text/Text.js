import styles from './Text.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import stylesPositive from '../Positive/Positive.less';
import stylesCritical from '../Critical/Critical.less';
import stylesSecondary from '../Secondary/Secondary.less';
import stylesStrong from '../Strong/Strong.less';
import stylesRegular from '../Regular/Regular.less';

export default function Text({
  children,
  className,
  small,
  substandard,
  superstandard,
  subheading,
  headline,
  heading,
  hero,
  raw,
  positive,
  critical,
  secondary,
  strong,
  regular,
  baseline,
  ...restProps
}) {
  return (
    <div
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [className]: className,
        [styles.small]: small,
        [styles.substandard]: substandard,
        [styles.superstandard]: superstandard,
        [styles.subheading]: subheading,
        [styles.headline]: headline,
        [styles.heading]: heading,
        [styles.hero]: hero,
        [styles.raw]: raw,
        [styles.baseline]: baseline
      })}>
      <span
        className={classnames({
          [stylesPositive.root]: positive,
          [stylesCritical.root]: critical,
          [stylesSecondary.root]: secondary,
          [stylesStrong.root]: strong,
          [stylesRegular.root]: regular
        })}>
        {children}
      </span>
    </div>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  small: PropTypes.bool,
  substandard: PropTypes.bool,
  superstandard: PropTypes.bool,
  subheading: PropTypes.bool,
  headline: PropTypes.bool,
  heading: PropTypes.bool,
  hero: PropTypes.bool,
  raw: PropTypes.bool,
  positive: PropTypes.bool,
  critical: PropTypes.bool,
  secondary: PropTypes.bool,
  strong: PropTypes.bool,
  regular: PropTypes.bool,
  baseline: PropTypes.bool
};

Text.defaultProps = {
  baseline: true
};
