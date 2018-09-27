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
  TickCircleIcon,
  HelpIcon,
  BuildingIcon
} from 'seek-style-guide/react';

export default function IconPreview() {
  return (
    <div className={styles.root}>
      <HeartIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <ProfileIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <BuildingIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <TickIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <TickCircleIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <CloseIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <SearchIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <ChevronIcon direction="down" className={styles.icon} svgClassName={styles.iconSvg} />
      <StarIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <ThumbsUpIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <ErrorIcon className={styles.icon} svgClassName={styles.iconSvg} />
      <HelpIcon className={styles.icon} svgClassName={styles.iconSvg} />
    </div>
  );
}
