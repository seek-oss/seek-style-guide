import styles from './SemiStrong.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function SemiStrong({ children, className, ...restProps }) {
  return (
    <span {...restProps} className={classnames(styles.root, className)}>
      {children}
    </span>
  );
}

SemiStrong.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
