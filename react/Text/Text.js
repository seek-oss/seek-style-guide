import styles from './Text.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Secondary from '../Secondary/Secondary';
import Strong from '../Strong/Strong';
import Positive from '../Positive/Positive';
import Critical from '../Critical/Critical';

const renderContent = ({ children, positive, critical, secondary, strong }) => {
  const modifiers = [
    positive ? Positive : null,
    critical ? Critical : null,
    secondary ? Secondary : null,
    strong ? Strong : null
  ].filter(x => x);

  return modifiers.reduce((content, Modifier) => <Modifier>{content}</Modifier>, children);
};

export default function Text({
  children,
  className,
  small,
  tiny,
  subheading,
  headline,
  heading,
  hero,
  raw,
  positive,
  critical,
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
        [styles.tiny]: tiny,
        [styles.subheading]: subheading,
        [styles.headline]: headline,
        [styles.heading]: heading,
        [styles.hero]: hero,
        [styles.raw]: raw
      })}>
      {renderContent({ children, positive, critical, secondary, strong })}
    </div>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  small: PropTypes.bool,
  tiny: PropTypes.bool,
  subheading: PropTypes.bool,
  headline: PropTypes.bool,
  heading: PropTypes.bool,
  hero: PropTypes.bool,
  raw: PropTypes.bool,
  positive: PropTypes.bool,
  critical: PropTypes.bool,
  secondary: PropTypes.bool,
  strong: PropTypes.bool
};
