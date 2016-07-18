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
    <a className={styles.root} href="#Iconography">
      <HeartIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <ProfileIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <TickIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <SearchIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <ChevronIcon direction="down" className={styles.icon} svgClassName={styles.iconSvg} />
      <StarIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <ThumbsUpIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <CloseIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <ErrorIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <HelpIcon className={styles.icon} svgClassName={styles.iconSvg} />
    </a>
  );
}
