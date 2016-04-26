import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Story from 'Story/Story';

import TextField from 'fields/TextField/TextField';

storiesOf('TextField', module)
  .add('Default', () => getItem({
  }))
  .add('Invalid', () => getItem({
    invalid: true,
    message: 'Nup something broke'
  }));

const getItem = ({ invalid, message }) => (
  <Story title="TextField">
    <TextField invalid={invalid} message={message} />
  </Story>
);
