import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styles from './typography.less';

storiesOf('Typography', module)
  .add('Hierarchy', () => getHierarchy())
  .add('Font Stack', () => getFontStack());

const getHierarchy = () => (
  <div>
    <div className={styles.baseline}></div>
    { getTypeItem('hero') }
    { getTypeItem('headline') }
    { getTypeItem('heading') }
    { getTypeItem('subheading') }
    { getTypeItem('standard') }
    { getTypeItem('small') }
    { getTypeItem('touchable') }
  </div>
);

const getTypeItem = (level, sample) => (
  <div className={styles.example}>
    <p className={styles[level]}>The quick brown fox...</p>
  </div>
);

const getFontStack = () => (
  <div>
    <p style={{fontFamily:"Helvetica Neue"}} className={styles.headline}>Helvetica Neue</p>
    <p style={{fontFamily:"HelveticaNeue"}} className={styles.headline}>HelveticaNeue</p>
    <p style={{fontFamily:"Helvetica"}} className={styles.headline}>Helvetica</p>
    <p style={{fontFamily:"Arial"}} className={styles.headline}>Arial</p>
    <p style={{fontFamily:"sans-serif"}} className={styles.headline}>sans-serif</p>
  </div>
);
