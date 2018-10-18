import React from 'react';
import ErrorIcon from './ErrorIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Error/1. Unfilled', <ErrorIcon />),
  ...generateSketchIconSizes('Error/2. Filled', <ErrorIcon filled />)
};
