import React from 'react';
import DownRightArrowIcon from './DownRightArrowIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('DownRightArrow', <DownRightArrowIcon />)
};
