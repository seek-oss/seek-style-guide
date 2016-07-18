import styles from './ButtonsPreview.less';
import buttonStyles from 'seek-style-guide/react/Button/Button.less';

import React from 'react';
import classnames from 'classnames';
import { Button } from 'seek-style-guide/react';

export default function ButtonsPreview() {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <Button colour="pink" className={styles.button}>Normal</Button>
        <Button colour="pink" className={classnames(styles.button, buttonStyles.rootHover)}>Hover</Button>
        <Button colour="pink" className={classnames(styles.button, buttonStyles.rootActive)}>Pressed</Button>
      </div>
      <div className={styles.group}>
        <Button colour="blue" className={styles.button}>Normal</Button>
        <Button colour="blue" className={classnames(styles.button, buttonStyles.rootHover)}>Hover</Button>
        <Button colour="blue" className={classnames(styles.button, buttonStyles.rootActive)}>Pressed</Button>
      </div>
    </div>
  );
}
