import styles from './Typography.less';

import React from 'react';

import GridContainer from 'GridContainer/GridContainer';
import TypeSample from 'TypeSample/TypeSample';

const renderDemo = () => (
  <div className={styles.demo}>
    <GridContainer>
      <TypeSample mixin="heroText" description="Hero text" />
      <TypeSample mixin="headlineText" description="Headline text" />
      <TypeSample mixin="subheadingText" description="Subheading text" />
      <TypeSample mixin="standardText" description="Standard text" />
      <TypeSample mixin="smallText" description="Small text" />
    </GridContainer>
  </div>
);

const renderIntro = () => (
  <GridContainer>
    <section className={styles.content}>
      <h1 className={styles.hero}>Typography</h1>
      <p className={styles.intro}>All typographic application needs to be functional. Whether it be through size, colour or weight, it is important that any variation in typographic application, is logically derived from a necessity to improve the clarity of the content, and heighten the clarity of communication to the reader. Typography should be used functionally, not for ornament.</p>
    </section>
  </GridContainer>
);

export default function Typography() {
  return (
    <div>
      { renderIntro() }
      { renderDemo() }
    </div>
  );
}
