// @flow

import React from 'react';
import styles from './Loader.less';
import classnames from 'classnames';

export default function Loader({
  inline,
  small,
  xsmall
}: {
  inline?: boolean,
  small?: boolean,
  xsmall?: boolean
}) {
  return (
    <div
      className={classnames(styles.root, {
        [styles.inline]: inline,
        [styles.small]: small,
        [styles.xsmall]: xsmall
      })}
    >
      <div className={styles.ball} />
      <div className={styles.ball} />
      <div className={styles.ball} />
    </div>
  );
}
