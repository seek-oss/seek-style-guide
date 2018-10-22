import React from 'react';
import FacebookIcon from './FacebookIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Facebook/1. Unfilled', <FacebookIcon />),
  ...generateSketchIconSizes('Facebook/2. Filled', <FacebookIcon filled />)
};
