import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styles from './BlueButton.story.less';

import BlueButton from './BlueButton';
import HeartIcon from 'icons/HeartIcon/HeartIcon';

storiesOf('Button', module)
  .add('Default', () => getItem({
  }))
  .add('Loading', () => getItem({
    loading: true
  }))
  .add('With Icons', () => getItem({
    Icon: HeartIcon
  }));

const getItem = ({ loading, Icon }) => (
  <BlueButton loading={loading}>
    { Icon && <Icon filled={true} svgClassName={styles.iconSvg} /> }
    My Blue Button
  </BlueButton>
);
