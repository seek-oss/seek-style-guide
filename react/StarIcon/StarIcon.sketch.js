import React from 'react';
import StarIcon from './StarIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Star/1. Unfilled', <StarIcon />),
  ...generateSketchIconSizes('Star/2. Filled', <StarIcon filled />),
  ...generateSketchIconSizes('Star/3. Half', <StarIcon half />)
};
