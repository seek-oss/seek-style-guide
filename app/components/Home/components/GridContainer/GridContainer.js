import styles from './GridContainer.less';

import React, { PropTypes } from 'react';

export default function GridContainer({ children }) {
  return (
    <div className={styles.root}>
      { children }
    </div>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node
};
