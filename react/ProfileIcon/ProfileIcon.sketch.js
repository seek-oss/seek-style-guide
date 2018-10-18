import React from 'react';
import ProfileIcon from './ProfileIcon';
import generateSketchIconSizes from '../private/generateSketchIconSizes';

export const symbols = {
  ...generateSketchIconSizes('Profile', <ProfileIcon />)
};
