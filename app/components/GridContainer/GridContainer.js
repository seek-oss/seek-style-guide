import styles from './GridContainer.less';

import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function GridContainer({ className, children }) {
  const classes = classnames(styles.root, className);

  return (
    <div className={classes}>
      { children }
    </div>
  );
}

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
