// @flow

import React from 'react';
import styles from './Loader.less';
import classnames from 'classnames';

export default function Loader({ inline, small }: { inline?: boolean, small?: boolean }) {
  return (
    <div
      className={classnames(styles.root, {
        [styles.inline]: inline,
        [styles.small]: small
      })}>
      <div className={styles.ball} />
      <div className={styles.ball} />
      <div className={styles.ball} />
    </div>
  );
}

