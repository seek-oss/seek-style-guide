import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BlueButton from './BlueButton';
import HeartIcon from 'icons/HeartIcon/HeartIcon';

storiesOf('BlueButton', module)
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
    { Icon && <Icon /> }
    My Blue Button
  </BlueButton>
);
