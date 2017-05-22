import styles from './Secondary.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Secondary({ children, className, ...restProps }) {
  return (
    <span {...restProps} className={classnames(styles.root, className)}>
      {children}
    </span>
  );
}

Secondary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
