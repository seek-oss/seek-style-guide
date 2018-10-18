import React from 'react';
import MailIcon from './MailIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Mail', <MailIcon />)
};
