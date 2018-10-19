import React from 'react';
import TwitterIcon from './TwitterIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Twitter/1. Unfilled', <TwitterIcon />),
  ...generateSketchIconSizes('Twitter/2. Filled', <TwitterIcon filled />)
};
