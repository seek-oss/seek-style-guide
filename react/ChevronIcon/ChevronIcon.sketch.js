import React from 'react';
import ChevronIcon from './ChevronIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Chevron', <ChevronIcon />)
};
