import React from 'react';
import styles from './Loader.less';

const Loader = () => (
  <div className={styles.root}>
    <div className={styles.ball} />
    <div className={styles.ball} />
    <div className={styles.ball} />
  </div>
);

export default Loader;
