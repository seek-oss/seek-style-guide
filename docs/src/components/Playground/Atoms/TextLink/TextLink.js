import styles from './TextLink.less';
import React from 'react';
import PropTypes from 'prop-types';

import ChevronIcon from 'seek-style-guide/react/ChevronIcon/ChevronIcon';
import classnames from 'classnames';

const renderChevron = chevron => {
  if (!chevron) {
    return null;
  }

  return (
    <ChevronIcon
      className={styles.chevron}
      direction={chevron}
      svgClassName={styles.chevronSvg}
    />
  );
};

export default function TextLink({
  component: Root,
  className,
  subheading,
  heading,
  hero,
  children,
  chevron,
  ...restProps
}) {
  const allProps = {
    ...restProps,
    className: classnames(styles.link, {
      [className]: className,
      [styles.subheading]: subheading,
      [styles.heading]: heading,
      [styles.hero]: hero,
      [styles.touchable]: !subheading && !heading && !hero
    })
  };

  return (
    <Root {...allProps}>
      {children}
      {renderChevron(chevron)}
    </Root>
  );
}

TextLink.displayName = 'TextLink';

TextLink.propTypes = {
  component: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
  chevron: PropTypes.oneOf(['up', 'down', 'right', 'left']),
  subheading: PropTypes.bool,
  heading: PropTypes.bool,
  hero: PropTypes.bool
};

TextLink.defaultProps = {
  component: 'a'
};
