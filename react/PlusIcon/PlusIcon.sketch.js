import React from 'react';
import PlusIcon from './PlusIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Plus', <PlusIcon />)
};
