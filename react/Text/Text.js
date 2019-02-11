import styles from './Text.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import stylesPositive from '../Positive/Positive.less';
import stylesCritical from '../Critical/Critical.less';
import stylesSecondary from '../Secondary/Secondary.less';
import stylesHighlight from '../Highlight/Highlight.less';
import stylesInfo from '../Info/Info.less';
import stylesStrong from '../Strong/Strong.less';
import stylesRegular from '../Regular/Regular.less';

import withTextProps, { SizePropTypes } from '../private/withTextProps';

const Text = ({
  component,
  bullet,
  children,
  className,
  size,
  raw,
  positive,
  critical,
  secondary,
  highlight,
  info,
  strong,
  regular,
  light,
  baseline,
  ...restProps
}) => {
  const Component = component || (bullet ? 'li' : 'span');
  return (
    <Component
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [className]: className,
        [styles[size]]: size,
        [styles.raw]: raw,
        [styles.bullet]: bullet,
        [styles.baseline]: baseline
      })}
    >
      <span
        className={classnames({
          [stylesPositive.root]: positive,
          [stylesCritical.root]: critical,
          [stylesSecondary.root]: secondary,
          [stylesHighlight.root]: highlight,
          [stylesHighlight.secondary]: highlight && secondary,
          [stylesInfo.root]: info,
          [stylesStrong.root]: strong,
          [stylesRegular.root]: regular,
          [styles.light]: light
        })}
      >
        {children}
      </span>
    </Component>
  );
};

Text.displayName = 'Text';

Text.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bullet: PropTypes.bool,
  ...SizePropTypes,
  raw: PropTypes.bool,
  positive: PropTypes.bool,
  critical: PropTypes.bool,
  secondary: PropTypes.bool,
  highlight: PropTypes.bool,
  info: PropTypes.bool,
  strong: PropTypes.bool,
  regular: PropTypes.bool,
  light: PropTypes.bool,
  baseline: PropTypes.bool
};

Text.defaultProps = {
  baseline: true,
  bullet: false,
  size: 'standard'
};

export default withTextProps(Text);
