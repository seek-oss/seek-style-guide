import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BulletPoint from '../BulletPoint/BulletPoint';

import styles from './BulletPointList.less';

const renderChild = child => {
  if (!React.isValidElement(child)) {
    return undefined;
  }
  const key = child.props.key || child.props.index;
  return <BulletPoint key={key}>{child}</BulletPoint>;
};

export default function BulletPointList({ className, children }) {
  return (
    <ul className={classNames(styles.root, className)}>
      {React.Children.map(children, renderChild)}
    </ul>
  );
}

BulletPointList.displayName = 'BulletPointList';

BulletPointList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
