import React from 'react';
import DeleteIcon from './DeleteIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Delete', <DeleteIcon />)
};
