import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Story from 'Story/Story';
import styles from './BlueButton.story.less';

import BlueButton from './BlueButton';
import HeartIcon from 'icons/HeartIcon/HeartIcon';
import AddCode from 'AddCode/AddCode';

storiesOf('Components', module)
  .add('BlueButton', () => getStory());

const getStory = () => (
  <Story title="Button">
    <div className={styles.wrapper}>
      <h1 className={styles.label}>Default Button</h1>
      <AddCode>
        <BlueButton>
          My Blue Button
        </BlueButton>
      </AddCode>
    </div>
    <div className={styles.wrapper}>
      <h1 className={styles.label}>Loading Button</h1>
      <AddCode>
        <BlueButton loading={true}>
          My Blue Button
        </BlueButton>
      </AddCode>
      </div>
    <div className={styles.wrapper}>
      <h1 className={styles.label}>Button with icon</h1>
      <AddCode>
        <BlueButton>
          <HeartIcon filled={true} svgClassName={styles.iconSvg} />
          My Blue Button
        </BlueButton>
      </AddCode>
    </div>
  </Story>
);
