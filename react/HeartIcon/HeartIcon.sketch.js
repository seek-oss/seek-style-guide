import React from 'react';
import HeartIcon from './HeartIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Heart/1. Unfilled', <HeartIcon />),
  ...generateSketchIconSizes('Heart/2. Filled', <HeartIcon filled />)
};
