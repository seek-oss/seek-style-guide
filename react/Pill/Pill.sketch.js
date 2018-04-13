import React from 'react';
import Pill from './Pill';
import SketchFieldContainer from '../private/SketchFieldContainer/SketchFieldContainer';

const noop = () => {};

export const symbols = {
  'Pill/Static': (
    <SketchFieldContainer>
      <Pill text="Pill text" />
    </SketchFieldContainer>
  ),
  'Pill/Interactive': (
    <SketchFieldContainer>
      <Pill text="Pill text" onClose={noop} />
    </SketchFieldContainer>
  )
};
