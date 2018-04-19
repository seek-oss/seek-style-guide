import styles from './Info.less';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default function Info({ children, className, ...restProps }) {
  return (
    <span {...restProps} className={classnames(styles.root, className)}>
      {children}
    </span>
  );
}

Info.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
