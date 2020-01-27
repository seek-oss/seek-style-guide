import React from 'react';
import ArticleIcon from './ArticleIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Article', <ArticleIcon />)
};
