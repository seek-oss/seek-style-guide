import React from 'react';
import HelpIcon from './HelpIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Help', <HelpIcon />)
};
