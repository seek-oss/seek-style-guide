import styles from './TypographyPreview.less';

import React from 'react';

const items = ['hero', 'headline'];

const sampleText = (
  <span>
    AaBb<span className={styles.cc}>Cc</span>
  </span>
);

export default function TypographyPreview() {
  return (
    <div className={styles.root}>
      {items.map(item => (
        <div key={item} className={styles[`${item}Item`]}>
          <p className={styles.bold}>{sampleText}</p>
          <p>{sampleText}</p>
        </div>
      ))}
    </div>
  );
}
