import React from 'react';
import CheckMarkIcon from './CheckMarkIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('CheckMark', <CheckMarkIcon />)
};
