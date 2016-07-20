import styles from './Colors.less';

import React from 'react';

import GridContainer from 'GridContainer/GridContainer';
import ColorPalette from 'ColorPalette/ColorPalette';
import Section from 'Section/Section';
import HeroText from 'HeroText/HeroText';
import SubheadingText from 'SubheadingText/SubheadingText';

const renderDemo = () => (
  <div className={styles.demo}>
    <GridContainer>
      <ColorPalette />
    </GridContainer>
  </div>
);

const renderIntro = () => (
  <GridContainer>
    <a name="Colors" />
    <h1><HeroText>Colors</HeroText></h1>
    <SubheadingText>The Seek experience should have the same color scheme and visual &lsquo;weight&rsquo; whichever device it is viewed on. This is made up of content on white, highlighting such as primary call to action in pink and use of the light and dark gray to provide accent and balance. All color combinations should be tested for AA accessibility.</SubheadingText>
  </GridContainer>
);

export default function Colors() {
  return (
    <Section>
      {renderIntro()}
      {renderDemo()}
    </Section>
  );
}
