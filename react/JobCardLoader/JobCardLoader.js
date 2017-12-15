import React from 'react';
import Card from '../Card/Card';
import styles from './JobCardLoader.less';

const JobCardLoader = () => {
  return (
    <Card className={styles.root}>
      <div className={styles.loader}>
        <div className={styles.animatedBackground}>
          <div className={`${styles.backgroundMasker} ${styles.companyRight}`} />
          <div className={`${styles.backgroundMasker} ${styles.companyBottom}`} />
          <div className={`${styles.backgroundMasker} ${styles.headerRight}`} />
          <div className={`${styles.backgroundMasker} ${styles.headerBottom}`} />
          <div className={`${styles.backgroundMasker} ${styles.desc1Right}`} />
          <div className={`${styles.backgroundMasker} ${styles.desc1Bottom}`} />
          <div className={`${styles.backgroundMasker} ${styles.desc2Right}`} />
          <div className={`${styles.backgroundMasker} ${styles.desc2Bottom}`} />
          <div className={`${styles.backgroundMasker} ${styles.locationRight}`} />
          <div className={`${styles.backgroundMasker} ${styles.locationBottom}`} />
          <div className={`${styles.backgroundMasker} ${styles.salaryRight}`} />
          <div className={`${styles.backgroundMasker} ${styles.salaryBottom}`} />
          <div className={`${styles.backgroundMasker} ${styles.dateRight}`} />
        </div>
      </div>
    </Card>
  );
};

export default JobCardLoader;
