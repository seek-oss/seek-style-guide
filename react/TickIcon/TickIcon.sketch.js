import React from 'react';
import TickIcon from './TickIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Tick', <TickIcon />)
};
