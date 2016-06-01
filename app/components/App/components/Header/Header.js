import styles from './Header.less';

import React from 'react';
import { Logo } from 'seek-style-guide/react';

export default function Header() {
  return (
    <div className={styles.root}>
      <Logo />
    </div>
  );
}
