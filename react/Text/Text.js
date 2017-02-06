import styles from './Text.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Secondary from '../Secondary/Secondary';
import Strong from '../Strong/Strong';

const renderContent = ({ children, secondary, strong }) => {
  const modifiers = [
    secondary ? Secondary : null,
    strong ? Strong : null
  ].filter(x => x);

  return modifiers.reduce((content, Modifier) => <Modifier>{content}</Modifier>, children);
};

export default function Text({
  children,
  className,
  small,
  subheading,
  headline,
  heading,
  hero,
  raw,
  secondary,
  strong,
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
      {renderContent({ children, secondary, strong })}
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
  raw: PropTypes.bool,
  secondary: PropTypes.bool,
  strong: PropTypes.bool
};
