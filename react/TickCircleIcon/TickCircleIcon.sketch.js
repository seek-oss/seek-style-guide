import React from 'react';
import TickCircleIcon from './TickCircleIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('TickCircle/1. Unfilled', <TickCircleIcon />),
  ...generateSketchIconSizes('TickCircle/2. Filled', <TickCircleIcon filled />)
};
