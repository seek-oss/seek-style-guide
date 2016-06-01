import styles from './TypographyPreview.less';

import React from 'react';

const items = [
  'hero',
  'headline'
];

const sampleText = 'AaBbCc';

export default function TypographyPreview() {
  return (
    <div className={styles.root}>
      {items.map(item => (
        <p key={item} className={styles[`${item}Item`]}>
          <div className={styles.bold}>{ sampleText }</div>
          <div>{ sampleText }</div>
        </p>
      ))}
    </div>
  );
}
