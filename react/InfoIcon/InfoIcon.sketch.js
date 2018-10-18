import React from 'react';
import InfoIcon from './InfoIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Info', <InfoIcon />)
};
