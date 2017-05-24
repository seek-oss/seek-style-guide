import styles from './TextLink.less';

import React from 'react';
import PropTypes from 'prop-types';

import ChevronIcon from '../ChevronIcon/ChevronIcon';
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

export default function TextLink({ component: Root, className, children, chevron, ...restProps }) {
  const allProps = {
    ...restProps,
    className: classnames(styles.link, className)
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
  chevron: PropTypes.oneOf(['up', 'down', 'right', 'left'])
};

TextLink.defaultProps = {
  component: 'a'
};
