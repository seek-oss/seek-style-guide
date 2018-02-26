import styles from './ButtonsPreview.less';
import buttonStyles from 'seek-style-guide/react/Button/Button.less';

import React from 'react';
import classnames from 'classnames';
import { Button } from 'seek-style-guide/react';

export default function ButtonsPreview() {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <Button color="pink" className={styles.button}>Button</Button>
        <Button color="pink" className={classnames(styles.button, buttonStyles.rootHover)}>Hover</Button>
        <Button color="pink" className={classnames(styles.button, buttonStyles.rootActive)}>Active</Button>
      </div>
      <div className={styles.group}>
        <Button color="blue" className={styles.button}>Button</Button>
        <Button color="blue" className={classnames(styles.button, buttonStyles.rootHover)}>Hover</Button>
        <Button color="blue" className={classnames(styles.button, buttonStyles.rootActive)}>Active</Button>
      </div>
    </div>
  );
}
