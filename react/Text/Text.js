import styles from './Text.less';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import colorStyles from '../../theme/atoms/color.less';
import stylesHighlight from '../Highlight/Highlight.less';
import stylesStrong from '../Strong/Strong.less';
import stylesRegular from '../Regular/Regular.less';
import withTextProps, { SizePropTypes } from '../private/withTextProps';
import withColorProps from '../private/withColorProps';

const Text = ({
  component,
  bullet,
  children,
  className,
  size,
  raw,
  color,
  highlight,
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
      })}>
      <span
        className={classnames({
          [colorStyles[color]]: color && colorStyles[color],
          [stylesHighlight.root]: highlight,
          [stylesHighlight.secondary]: highlight && color === 'secondary',
          [stylesStrong.root]: strong,
          [stylesRegular.root]: regular,
          [styles.light]: light
        })}>
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
  color: PropTypes.oneOf(Object.keys(colorStyles)),
  raw: PropTypes.bool,
  highlight: PropTypes.bool,
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

export default withTextProps(withColorProps(Text));
