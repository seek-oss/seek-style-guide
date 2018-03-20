import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './BulletList.less';

export default function BulletList({ className, children }) {
  return (
    <ul className={classNames(styles.root, className)}>
      {children}
    </ul>
  );
}

BulletList.displayName = 'BulletList';

BulletList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
