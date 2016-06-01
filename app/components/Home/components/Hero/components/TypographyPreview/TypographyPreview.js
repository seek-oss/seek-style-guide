import styles from './TypographyPreview.less';

import React from 'react';

const items = [
  'hero',
  'headline',
  'heading',
  'subheading',
  'standard',
  'small',
  'touchable'
];

export default function TypographyPreview() {
  return (
    <div>
      {items.map(item => (
        <p className={styles[`${item}Item`]} key={item}>Aa</p>
      ))}
    </div>
  );
}
