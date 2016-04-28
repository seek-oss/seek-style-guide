import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Story from 'Story/Story';
import styles from './TextField.story.less';

import TextField from 'fields/TextField/TextField';
import AddCode from 'AddCode/AddCode';

storiesOf('Components', module)
  .add('TextField', () => getStory());

const getStory = () => (
  <Story title="TextField">
    <div className={styles.wrapper}>
      <h1 className={styles.label}>Default TextField</h1>
      <AddCode>
        <TextField />
      </AddCode>
    </div>
    <div className={styles.wrapper}>
      <h1 className={styles.label}>Invalid TextField</h1>
      <AddCode>
        <TextField invalid={true} message="Nup something broke" />
      </AddCode>
    </div>
  </Story>
);
