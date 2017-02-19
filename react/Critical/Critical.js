import styles from './Critical.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Critical({ children, className, ...restProps }) {
  return (
    <em {...restProps} className={classnames(styles.root, className)}>
      {children}
    </em>
  );
}

Critical.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
