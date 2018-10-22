import React from 'react';
import BuildingIcon from './BuildingIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Building', <BuildingIcon />)
};
