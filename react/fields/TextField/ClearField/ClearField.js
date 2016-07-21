import styles from './ClearField.less';

import React from 'react';
import ClearIcon from '../../../icons/ClearIcon/ClearIcon';

export default function ClearField() {
  return (
    <ClearIcon
      className={styles.root}
      svgClassName={styles.clearSvg}
    />
  );
}
