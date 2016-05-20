import styles from './Section.less';

import React, { PropTypes } from 'react';

export default function Section({ children }) {
  return (
    <div className={styles.root}>
    { children }
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node
};
