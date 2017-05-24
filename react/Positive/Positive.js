import styles from './Positive.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Positive({ children, className, ...restProps }) {
  return (
    <span {...restProps} className={classnames(styles.root, className)}>
      {children}
    </span>
  );
}

Positive.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
