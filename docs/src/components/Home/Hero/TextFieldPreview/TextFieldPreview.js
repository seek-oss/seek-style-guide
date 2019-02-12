import styles from './TextFieldPreview.less';
import textFieldStyles from 'seek-style-guide/react/TextField/TextField.less';

import React from 'react';
import { TextField } from 'seek-style-guide/react';

export default function TextFieldPreview() {
  return (
    <div className={styles.root}>
      <TextField id="standard" message={false} />
      <TextField
        id="focus"
        message={false}
        className={textFieldStyles.rootFocus}
      />
      <TextField id="error" tone="critical" message="Something went wrong" />
    </div>
  );
}
