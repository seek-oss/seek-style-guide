import styles from './TextField.less';

import React from 'react';
import AddCode from 'AddCode/AddCode';
import { TextField } from 'seek-style-guide/react';

export default function TextFieldComponent() {
  return (
    <div>
      <h1 className={styles.heading}>Text field</h1>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.subheading}>Default</h1>
          <AddCode>
            <TextField />
          </AddCode>
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.subheading}>Invalid</h1>
          <AddCode>
            <TextField invalid={true} message="Something went wrong" />
          </AddCode>
        </div>
      </div>
    </div>
  );
}
