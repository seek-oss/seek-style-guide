import React from 'react';
import ClearIcon from './ClearIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Clear', <ClearIcon />)
};
