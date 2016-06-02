import styles from './Header.less';

import React from 'react';
import { Logo } from 'seek-style-guide/react';
import GridContainer from 'GridContainer/GridContainer';

export default function Header() {
  return (
    <GridContainer>
      <div className={styles.logo}>
        <Logo />
        <p className={styles.title}>design system</p>
      </div>
    </GridContainer>
  );
}
