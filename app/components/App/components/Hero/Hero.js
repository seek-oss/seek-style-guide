import styles from './Hero.less';

import React from 'react';

import BrandColours from 'BrandColours/BrandColours';
import GridContainer from 'GridContainer/GridContainer';

export default function Hero() {
  return (
    <div className={styles.root}>
      <GridContainer>
        <BrandColours />
      </GridContainer>
    </div>
  );
}
