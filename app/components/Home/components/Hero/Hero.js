import styles from './Hero.less';

import React from 'react';

import GridContainer from 'GridContainer/GridContainer';
import ColorPreview from 'ColorPreview/ColorPreview';
import ButtonsPreview from 'ButtonsPreview/ButtonsPreview';
import TypographyPreview from 'TypographyPreview/TypographyPreview';
import TextFieldPreview from 'TextFieldPreview/TextFieldPreview';
import IconPreview from 'IconPreview/IconPreview';

export default function Hero() {
  return (
    <div className={styles.root}>
      <GridContainer>
        <div className={styles.layout}>
          <ColorPreview />
          <ButtonsPreview />
          <TypographyPreview />
          <TextFieldPreview />
          <IconPreview />
        </div>
      </GridContainer>
    </div>
  );
}
