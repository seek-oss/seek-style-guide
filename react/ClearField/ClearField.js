import styles from './ClearField.less';

import React from 'react';
import { ClearIcon } from 'seek-style-guide/react';

export default function ClearField() {
  return (
    <div className={styles.root}>
      <ClearIcon svgClassName={styles.clearSvg} />
    </div>
  );
}
