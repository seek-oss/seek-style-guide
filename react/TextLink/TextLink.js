import styles from './TextLink.less';

import React from 'react';
import PropTypes from 'prop-types';

import ChevronIcon from '../ChevronIcon/ChevronIcon';
import classnames from 'classnames';

import withTextProps, { SizePropTypes } from '../private/withTextProps';

const renderChevron = (chevron, size) => {
  if (!chevron) {
    return null;
  }

  return (
    <ChevronIcon
      size={size}
      className={styles.chevron}
      direction={chevron}
    />
  );
};

const TextLink = ({ component: Root, className, children, chevron, size, ...restProps }) => {
  const allProps = {
    ...restProps,
    size,
    className: classnames(styles.link, className)
  };

  return (
    <Root {...allProps}>
      {children}
      {renderChevron(chevron, size)}
    </Root>
  );
};

TextLink.displayName = 'TextLink';

TextLink.propTypes = {
  ...SizePropTypes,
  component: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
  chevron: PropTypes.oneOf(['up', 'down', 'right', 'left'])
};

TextLink.defaultProps = {
  component: 'a',
  size: 'standard'
};

export default withTextProps(TextLink);
