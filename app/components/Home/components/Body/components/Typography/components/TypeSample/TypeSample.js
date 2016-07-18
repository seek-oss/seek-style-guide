import styles from './TypeSample.less';

import React, { PropTypes } from 'react';

export default function TypeSample({ mixin, description }) {
  return (
    <div className={styles.root}>
      <p className={`${styles[mixin]} ${styles.bold}`}>The quick brown fox applied for the lazy job.</p>
      <p className={styles[mixin]}>The quick brown fox applied for the lazy job.</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

TypeSample.propTypes = {
  mixin: PropTypes.string,
  description: PropTypes.string
};
