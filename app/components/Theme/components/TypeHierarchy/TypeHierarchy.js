import styles from './TypeHierarchy.less';

import React from 'react';
import Baseline from 'react-baseline';

const items = [
  'hero',
  'headline',
  'heading',
  'subheading',
  'standard',
  'small',
  'touchable'
];

const renderItem = item => (
  <div className={styles.item} key={item}>
    <p className={styles[`${item}Item`]}>
      The quick brown fox...
    </p>
  </div>
);

export default function TypeHierarchy() {
  return (
    <div>
      <h1 className={styles.heading}>Type hierarchy</h1>
      <div className={styles.content}>
        <Baseline type="bar" color="rgba(255, 145, 145, 0.3)">
          <div className={styles.itemsContainer}>
            {items.map(renderItem)}
          </div>
        </Baseline>
      </div>
    </div>
  );
}
