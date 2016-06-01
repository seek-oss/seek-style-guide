import styles from './IconPreview.less';

import React from 'react';
import {
  ChevronIcon,
  CloseIcon,
  HeartIcon,
  ProfileIcon,
  SearchIcon,
  StarIcon,
  ThumbsUpIcon,
  ErrorIcon,
  TickIcon,
  HelpIcon
} from 'seek-style-guide/react';

export default function IconPreview() {
  return (
    <div className={styles.root}>
      <HeartIcon svgClassName={styles.icon} />
      <ProfileIcon svgClassName={styles.icon} />
      <TickIcon svgClassName={styles.icon} />
      <SearchIcon svgClassName={styles.icon} />
      <ChevronIcon direction="down" svgClassName={styles.icon} />
      <StarIcon svgClassName={styles.icon} />
      <ThumbsUpIcon svgClassName={styles.icon} />
      <CloseIcon svgClassName={styles.icon} />
      <ErrorIcon svgClassName={styles.icon} />
      <HelpIcon svgClassName={styles.icon} />
    </div>
  );
}
