import React from 'react';
import LinkedInIcon from './LinkedInIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('LinkedIn/1. Unfilled', <LinkedInIcon />),
  ...generateSketchIconSizes('LinkedIn/2. Filled', <LinkedInIcon filled />)
};
