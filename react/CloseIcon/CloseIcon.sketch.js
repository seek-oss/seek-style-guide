import React from 'react';
import CloseIcon from './CloseIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Close', <CloseIcon />)
};
