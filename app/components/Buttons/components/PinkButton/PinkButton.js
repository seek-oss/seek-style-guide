import styles from './PinkButton.less';

import React from 'react';
import AddCode from 'AddCode/AddCode';
import Heading from 'Heading/Heading';
import Subheading from 'Subheading/Subheading';
import { PinkButton, HeartIcon } from 'seek-style-guide/react';

export default function PinkButtonComponent() {
  return (
    <div>
      <Heading>Pink button</Heading>

      <Subheading>Default</Subheading>
      <AddCode>
        <PinkButton>
          My Pink Button
        </PinkButton>
      </AddCode>

      <Subheading>Loading</Subheading>
      <AddCode>
        <PinkButton loading={true}>
          My Pink Button
        </PinkButton>
      </AddCode>

      <Subheading>With icon</Subheading>
      <AddCode>
        <PinkButton>
          <HeartIcon filled={true} svgClassName={styles.iconSvg} />
          My Pink Button
        </PinkButton>
      </AddCode>
    </div>
  );
}
