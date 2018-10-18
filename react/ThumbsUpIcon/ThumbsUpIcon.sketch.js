import React from 'react';
import ThumbsUpIcon from './ThumbsUpIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('ThumbsUp', <ThumbsUpIcon />)
};
