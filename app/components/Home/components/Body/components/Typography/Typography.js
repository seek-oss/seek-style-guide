import styles from './Typography.less';

import React from 'react';

import GridContainer from 'GridContainer/GridContainer';
import Section from 'Section/Section';
import TypeSample from 'TypeSample/TypeSample';
import HeroText from 'HeroText/HeroText';
import SubheadingText from 'SubheadingText/SubheadingText';

const renderDemo = () => (
  <div className={styles.demo}>
    <GridContainer>
      <TypeSample mixin="heroText" description="Hero text" />
      <TypeSample mixin="headlineText" description="Headline text" />
      <TypeSample mixin="headingText" description="Heading text" />
      <TypeSample mixin="subheadingText" description="Subheading text" />
      <TypeSample mixin="standardText" description="Standard text" />
      <TypeSample mixin="smallText" description="Small text" />
    </GridContainer>
  </div>
);

const renderIntro = () => (
  <GridContainer>
    <HeroText>Typography</HeroText>
    <SubheadingText>All typographic application needs to be functional. Whether it be through size, colour or weight, it is important that any variation in typographic application, is logically derived from a necessity to improve the clarity of the content, and heighten the clarity of communication to the reader. Typography should be used functionally, not for ornament.</SubheadingText>
  </GridContainer>
);

export default function Typography() {
  return (
    <Section>
      { renderIntro() }
      { renderDemo() }
    </Section>
  );
}
