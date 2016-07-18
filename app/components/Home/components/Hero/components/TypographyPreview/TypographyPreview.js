import styles from './TypographyPreview.less';

import React from 'react';

const items = [
  'hero',
  'headline'
];

const sampleText = 'AaBbCc';

export default function TypographyPreview() {
  return (
    <a className={styles.root} href="#Typography">
      {items.map(item => (
        <div key={item} className={styles[`${item}Item`]}>
          <p className={styles.bold}>{sampleText}</p>
          <p>{sampleText}</p>
        </div>
      ))}
    </a>
  );
}
