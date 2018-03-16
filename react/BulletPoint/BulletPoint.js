import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './BulletPoint.less';

export default function BulletPoint({ className, children, ...rest }) {
  return (
    <li
      className={classNames({
        [styles.root]: true,
        [className]: className
      })}
      {...rest}>
      {children}
    </li>
  );
}

BulletPoint.displayName = 'BulletPoint';

BulletPoint.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
