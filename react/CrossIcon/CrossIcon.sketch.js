import React from 'react';
import CrossIcon from './CrossIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Cross', <CrossIcon />)
};
