import styles from './ButtonsPreview.less';
import buttonStyles from 'seek-style-guide/react/Button/Button.less';

import React from 'react';
import classnames from 'classnames';
import { Button } from 'seek-style-guide/react';

export default function ButtonsPreview() {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <Button color="hyperlink" className={styles.button}>Normal</Button>
        <Button color="hyperlink" className={classnames(styles.button, buttonStyles.rootHover)}>Hover</Button>
        <Button color="hyperlink" className={classnames(styles.button, buttonStyles.rootActive)}>Pressed</Button>
      </div>
      <div className={styles.group}>
        <Button color="alert" className={styles.button}>Normal</Button>
        <Button color="alert" className={classnames(styles.button, buttonStyles.rootHover)}>Hover</Button>
        <Button color="alert" className={classnames(styles.button, buttonStyles.rootActive)}>Pressed</Button>
      </div>
    </div>
  );
}
