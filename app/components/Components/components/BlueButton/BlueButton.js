import styles from './BlueButton.less';

import React from 'react';
import AddCode from 'AddCode/AddCode';
import { BlueButton, HeartIcon } from 'seek-style-guide/react';

export default function BlueButtonComponent() {
  return (
    <div>
      <h1 className={styles.heading}>Blue button</h1>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.subheading}>Default</h1>
          <AddCode>
            <BlueButton>
              My Blue Button
            </BlueButton>
          </AddCode>
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.subheading}>Loading</h1>
          <AddCode>
            <BlueButton loading={true}>
              My Blue Button
            </BlueButton>
          </AddCode>
          </div>
        <div className={styles.wrapper}>
          <h1 className={styles.subheading}>With icon</h1>
          <AddCode>
            <BlueButton>
              <HeartIcon filled={true} svgClassName={styles.iconSvg} />
              My Blue Button
            </BlueButton>
          </AddCode>
        </div>
      </div>
    </div>
  );
}
