import React from 'react';
import SearchIcon from './SearchIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Search', <SearchIcon />)
};
