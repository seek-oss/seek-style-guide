import styles from './TextFieldPreview.less';
import textFieldStyles from 'seek-style-guide/react/fields/TextField/TextField.less';

import React from 'react';
import { TextField } from 'seek-style-guide/react';

export default function TextFieldPreview() {
  return (
    <div className={styles.root}>
      <TextField />
      <TextField className={textFieldStyles.rootFocus} />
      <TextField valid={false} message="Something went wrong" />
    </div>
  );
}
