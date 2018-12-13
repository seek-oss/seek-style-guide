import React from 'react';
import BellIcon from './BellIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Bell', <BellIcon />)
};
