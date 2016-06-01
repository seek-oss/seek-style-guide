import styles from './Hero.less';

import React from 'react';

import GridContainer from 'GridContainer/GridContainer';
import BrandColours from 'BrandColours/BrandColours';
import TypographyPreview from 'TypographyPreview/TypographyPreview';

export default function Hero() {
  return (
    <div className={styles.root}>
      <GridContainer>
        <div className={styles.layout}>
          <BrandColours />
          <TypographyPreview />
        </div>
      </GridContainer>
    </div>
  );
}
