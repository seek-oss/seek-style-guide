import styles from './TextLink.less';

import React from 'react';
import PropTypes from 'prop-types';

import ChevronIcon from '../ChevronIcon/ChevronIcon';
import classnames from 'classnames';

export const chevronDirections = ['up', 'down', 'right', 'left'];

const renderChevron = (chevron, chevronProps, isLeftChevron) => {
  if (!chevron) {
    return null;
  }

  return (
    <ChevronIcon
      {...chevronProps}
      className={
        isLeftChevron ? styles.chevronLeftSide : styles.chevronRightSide
      }
      direction={chevron}
    />
  );
};

export default function TextLink({
  component: Root,
  className,
  children,
  chevron,
  chevronProps,
  ...restProps
}) {
  const allProps = {
    ...restProps,
    className: classnames(styles.link, className)
  };

  const isLeftChevron = chevron === 'left';

  return (
    <Root {...allProps}>
      {isLeftChevron && renderChevron(chevron, chevronProps, isLeftChevron)}
      {children}
      {!isLeftChevron && renderChevron(chevron, chevronProps, isLeftChevron)}
    </Root>
  );
}

TextLink.displayName = 'TextLink';

TextLink.propTypes = {
  component: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
  chevron: PropTypes.oneOf(chevronDirections),
  chevronProps: PropTypes.object
};

TextLink.defaultProps = {
  component: 'a',
  chevronProps: { size: 'standard' }
};
