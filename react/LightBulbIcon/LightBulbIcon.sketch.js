import React from 'react';
import LightBulbIcon from './LightBulbIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('LightBulb', <LightBulbIcon />)
};
