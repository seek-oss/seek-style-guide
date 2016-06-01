import styles from './ButtonsPreview.less';
import buttonStyles from 'seek-style-guide/react/Button/Button.less';

import React from 'react';
import { Button } from 'seek-style-guide/react';

export default function ButtonsPreview() {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <Button colour="pink">SEEK</Button>
        <Button colour="pink" className={buttonStyles.rootHover}>SEEK</Button>
        <Button colour="pink" className={buttonStyles.rootActive}>SEEK</Button>
      </div>
      <div className={styles.group}>
        <Button colour="blue">SEEK</Button>
        <Button colour="blue" className={buttonStyles.rootHover}>SEEK</Button>
        <Button colour="blue" className={buttonStyles.rootActive}>SEEK</Button>
      </div>
    </div>
  );
}
