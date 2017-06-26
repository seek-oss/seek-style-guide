import styles from './Regular.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Regular({ children, className, ...restProps }) {
  return (
    <span {...restProps} className={classnames(styles.root, className)}>
      {children}
    </span>
  );
}

Regular.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
