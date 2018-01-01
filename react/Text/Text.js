import styles from './Text.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import stylesPositive from '../Positive/Positive.less';
import stylesCritical from '../Critical/Critical.less';
import stylesSecondary from '../Secondary/Secondary.less';
import stylesStrong from '../Strong/Strong.less';
import stylesRegular from '../Regular/Regular.less';

import withTextProps, { SizePropTypes } from '../private/withTextProps';

const Text = ({
  children,
  className,
  size,
  raw,
  positive,
  critical,
  secondary,
  strong,
  regular,
  light,
  baseline,
  ...restProps
}) => (
  <span
    {...restProps}
    className={classnames({
      [styles.root]: true,
      [className]: className,
      [styles[size]]: size,
      [styles.raw]: raw,
      [styles.baseline]: baseline
    })}>
    <span
      className={classnames({
        [stylesPositive.root]: positive,
        [stylesCritical.root]: critical,
        [stylesSecondary.root]: secondary,
        [stylesStrong.root]: strong,
        [stylesRegular.root]: regular,
        [styles.light]: light
      })}>
      {children}
    </span>
  </span>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: SizePropTypes,
  raw: PropTypes.bool,
  positive: PropTypes.bool,
  critical: PropTypes.bool,
  secondary: PropTypes.bool,
  strong: PropTypes.bool,
  regular: PropTypes.bool,
  light: PropTypes.bool,
  baseline: PropTypes.bool
};

Text.defaultProps = {
  baseline: true
};

export default withTextProps()(Text);
