import styles from './Text.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Text({
  children,
  className,
  small,
  subheading,
  headline,
  heading,
  hero,
  raw,
  ...restProps
}) {
  return (
    <div
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [className]: className,
        [styles.small]: small,
        [styles.subheading]: subheading,
        [styles.headline]: headline,
        [styles.heading]: heading,
        [styles.hero]: hero,
        [styles.raw]: raw
      })}>
      {children}
    </div>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  small: PropTypes.bool,
  subheading: PropTypes.bool,
  headline: PropTypes.bool,
  heading: PropTypes.bool,
  hero: PropTypes.bool,
  raw: PropTypes.bool
};
