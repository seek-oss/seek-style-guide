import styles from './IconPreview.less';

import React from 'react';
import {
  IconAlert,
  IconBookmark,
  IconCompany,
  IconEducation,
  IconEmployer,
  IconExperience,
  IconHome,
  IconJobAd,
  IconMail,
  IconNegative,
  IconPositive,
  IconResume,
  IconSearch
} from 'seek-asia-style-guide/react';

export default function IconPreview() {
  return (
    <div className={styles.root}>
      <IconEducation className={styles.icon} svgClassName={styles.iconSvg} />
      <IconExperience className={styles.icon} svgClassName={styles.iconSvg} />
      <IconResume className={styles.icon} svgClassName={styles.iconSvg} />
      <IconJobAd className={styles.icon} svgClassName={styles.iconSvg} />
      <IconCompany className={styles.icon} svgClassName={styles.iconSvg} />
      <IconSearch className={styles.icon} svgClassName={styles.iconSvg} />
      <IconEmployer className={styles.icon} svgClassName={styles.iconSvg} />
      <IconHome className={styles.icon} svgClassName={styles.iconSvg} />
      <IconBookmark className={styles.icon} svgClassName={styles.iconSvg} />
      <IconAlert className={styles.icon} svgClassName={styles.iconSvg} />
      <IconNegative className={styles.icon} svgClassName={styles.iconSvg} />
      <IconPositive className={styles.icon} svgClassName={styles.iconSvg} />
      <IconMail className={styles.icon} svgClassName={styles.iconSvg} />
    </div>
  );
}
