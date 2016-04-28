import React from 'react';
import Baseline from 'react-baseline';
import { storiesOf, action } from '@kadira/storybook';
import Story from 'Story/Story';
import styles from './type.story.less';

storiesOf('Theme', module)
  .add('Type Hierarchy', () => getTypeHierarchy())
  .add('Font Stack', () => getFontStack());

const getTypeHierarchy = () => (
  <Story title="Type Hierarchy">
    <Baseline type="bar" color="rgba(255, 145, 145, 0.3)">
      <div>
        { getTypeItem('hero') }
        { getTypeItem('headline') }
        { getTypeItem('heading') }
        { getTypeItem('subheading') }
        { getTypeItem('standard') }
        { getTypeItem('small') }
        { getTypeItem('touchable') }
      </div>
    </Baseline>
  </Story>
);

const getTypeItem = (level, sample) => (
  <div className={styles.example}>
    <p className={styles[level]}>The quick brown fox...</p>
  </div>
);

const getFontStack = () => (
  <Story title="Font stack">
    <div className={styles.story}>
      <p style={{fontFamily:"Helvetica Neue"}} className={styles.headline}>Helvetica Neue</p>
      <p style={{fontFamily:"HelveticaNeue"}} className={styles.headline}>HelveticaNeue</p>
      <p style={{fontFamily:"Helvetica"}} className={styles.headline}>Helvetica</p>
      <p style={{fontFamily:"Arial"}} className={styles.headline}>Arial</p>
      <p style={{fontFamily:"sans-serif"}} className={styles.headline}>sans-serif</p>
    </div>
  </Story>
);
