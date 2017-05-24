import styles from './Strong.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Strong({ children, className, ...restProps }) {
  return (
    <strong {...restProps} className={classnames(styles.root, className)}>
      {children}
    </strong>
  );
}

Strong.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
