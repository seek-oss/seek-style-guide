import styles from './BlueButton.less';

import React from 'react';
import AddCode from 'AddCode/AddCode';
import Heading from 'Heading/Heading';
import Subheading from 'Subheading/Subheading';
import { BlueButton, HeartIcon } from 'seek-style-guide/react';

export default function BlueButtonComponent() {
  return (
    <div>
      <Heading>Blue button</Heading>

      <Subheading>Default</Subheading>
      <AddCode>
        <BlueButton>
          My Blue Button
        </BlueButton>
      </AddCode>

      <Subheading>Loading</Subheading>
      <AddCode>
        <BlueButton loading={true}>
          My Blue Button
        </BlueButton>
      </AddCode>

      <Subheading>With icon</Subheading>
      <AddCode>
        <BlueButton>
          <HeartIcon filled={true} svgClassName={styles.iconSvg} />
          My Blue Button
        </BlueButton>
      </AddCode>
    </div>
  );
}
