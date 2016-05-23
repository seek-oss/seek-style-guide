import styles from './TypeHierarchy.less';

import React from 'react';
import Baseline from 'react-baseline';
import Section from 'Section/Section';
import Heading from 'Heading/Heading';

const items = [
  'hero',
  'headline',
  'heading',
  'subheading',
  'standard',
  'small',
  'touchable'
];

const renderItem = item => (
  <div className={styles.item} key={item}>
    <p className={styles[`${item}Item`]}>
      The quick brown fox...
    </p>
  </div>
);

export default function TypeHierarchy() {
  return (
    <Section>
      <Heading>Type hierarchy</Heading>
      <Baseline type="bar" color="rgba(255, 145, 145, 0.3)">
        <div className={styles.itemsContainer}>
          {items.map(renderItem)}
        </div>
      </Baseline>
    </Section>
  );
}
