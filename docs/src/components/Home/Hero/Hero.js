import styles from './Hero.less';
import React from 'react';
import { PageBlock, Section } from 'seek-asia-style-guide/react';
import ColorPreview from './ColorPreview/ColorPreview';
import ButtonsPreview from './ButtonsPreview/ButtonsPreview';
import TypographyPreview from './TypographyPreview/TypographyPreview';
import TextFieldPreview from './TextFieldPreview/TextFieldPreview';
import IconPreview from './IconPreview/IconPreview';

export default function Hero() {
  return (
    <div className={styles.root} aria-hidden="true">
      <PageBlock>
        <Section>
          <div className={styles.layout}>
            <ColorPreview />
            <ButtonsPreview />
            <TypographyPreview />
            <TextFieldPreview />
            <IconPreview />
          </div>
        </Section>
      </PageBlock>
    </div>
  );
}
