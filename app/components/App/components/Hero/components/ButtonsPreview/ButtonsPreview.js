import styles from './ButtonsPreview.less';
import pinkButtonStyles from 'seek-style-guide/react/buttons/PinkButton/PinkButton.less';
import blueButtonStyles from 'seek-style-guide/react/buttons/BlueButton/BlueButton.less';

import React from 'react';
import { PinkButton, BlueButton } from 'seek-style-guide/react';

const getSwatch = name => {
  const value = brandValues[name];

  return (
    <div className={styles.drop} key={name}>
      <Droplet
        colour={value}
        sizeInRows={5}
        showHex={true}
      />
    </div>
  );
};

export default function ButtonsPreview() {
  return (
    <div>
      <div className={styles.group}>
        <PinkButton>SEEK</PinkButton>
        <PinkButton className={pinkButtonStyles.rootHover}>SEEK</PinkButton>
        <PinkButton className={pinkButtonStyles.rootFocus}>SEEK</PinkButton>
        <PinkButton className={pinkButtonStyles.rootActive}>SEEK</PinkButton>
      </div>
      <div className={styles.group}>
        <BlueButton>SEEK</BlueButton>
        <BlueButton className={blueButtonStyles.rootHover}>SEEK</BlueButton>
        <BlueButton className={blueButtonStyles.rootFocus}>SEEK</BlueButton>
        <BlueButton className={blueButtonStyles.rootActive}>SEEK</BlueButton>
      </div>
    </div>
  );
}
