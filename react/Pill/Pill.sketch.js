import React from 'react';
import Pill from './Pill';
import SketchFieldContainer from '../private/SketchFieldContainer/SketchFieldContainer';

const noop = () => {};

export const symbols = {
  'Pill/Static': (
    <SketchFieldContainer>
      <Pill>Pill text</Pill>
    </SketchFieldContainer>
  ),
  'Pill/Interactive': (
    <SketchFieldContainer>
      <Pill onClose={noop}>Pill text</Pill>
    </SketchFieldContainer>
  )
};
