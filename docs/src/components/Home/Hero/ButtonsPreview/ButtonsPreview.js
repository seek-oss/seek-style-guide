import styles from './ButtonsPreview.less';
import buttonStyles from 'seek-asia-style-guide/react/Button/Button.less';

import React from 'react';
import classnames from 'classnames';
import { Button } from 'seek-asia-style-guide/react';

export default function ButtonsPreview() {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <Button color="hyperlink" className={styles.button}>Normal</Button>
        <Button color="hyperlink" className={classnames(styles.button, buttonStyles.rootHover)}>Hover</Button>
        <Button color="hyperlink" className={classnames(styles.button, buttonStyles.rootActive)}>Pressed</Button>
      </div>
      <div className={styles.group}>
        <Button color="highlight" className={styles.button}>Normal</Button>
        <Button color="highlight" className={classnames(styles.button, buttonStyles.rootHover)}>Hover</Button>
        <Button color="highlight" className={classnames(styles.button, buttonStyles.rootActive)}>Pressed</Button>
      </div>
    </div>
  );
}
