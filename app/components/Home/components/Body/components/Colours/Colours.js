import styles from './Colours.less';

import React from 'react';

import GridContainer from 'GridContainer/GridContainer';
import ColourPalette from 'ColourPalette/ColourPalette';
import Section from 'Section/Section';
import HeroText from 'HeroText/HeroText';
import SubheadingText from 'SubheadingText/SubheadingText';

const renderDemo = () => (
  <div className={styles.demo}>
    <GridContainer>
      <ColourPalette />
    </GridContainer>
  </div>
);

const renderIntro = () => (
  <GridContainer>
    <Section>
      <HeroText>Colours</HeroText>
      <SubheadingText>The Seek experience should have the same colour scheme and visual &lsquo;weight&rsquo; whichever device it is viewed on. This is made up of content on white, highlighting such as primary call to action in pink and use of the light and dark grey to provide accent and balance. All colour combinations should be tested for AA accessibility.</SubheadingText>
    </Section>
  </GridContainer>
);

export default function Colours() {
  return (
    <div>
      { renderIntro() }
      { renderDemo() }
    </div>
  );
}
