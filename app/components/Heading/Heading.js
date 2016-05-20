import styles from './Heading.less';

import React, { PropTypes } from 'react';

export default function Heading({ children }) {
  return (
    <h1 className={styles.root}>{children}</h1>
  );
}

Heading.propTypes = {
  children: PropTypes.node
};
