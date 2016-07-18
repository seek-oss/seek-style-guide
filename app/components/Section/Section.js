import styles from './Section.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Section({ className, children }) {
  const classes = classnames(styles.root, className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
