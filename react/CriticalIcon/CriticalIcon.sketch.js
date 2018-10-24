import React from 'react';
import CriticalIcon from './CriticalIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Critical', <CriticalIcon />)
};
