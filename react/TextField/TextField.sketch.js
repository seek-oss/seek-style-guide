import React from 'react';
import TextField from './TextField';
import SketchFieldContainer from '../private/SketchFieldContainer/SketchFieldContainer';

export const symbols = {
  'TextField/Standard': (
    <SketchFieldContainer>
      <TextField id="textfield1" label="Label" message={false} />
    </SketchFieldContainer>
  ),
  'TextField/With Help Text': (
    <SketchFieldContainer>
      <TextField id="firstName2" label="Label" message="Help text" />
    </SketchFieldContainer>
  ),
  'TextField/With Critical Text': (
    <SketchFieldContainer>
      <TextField
        id="firstName3"
        label="Label"
        message="Critical text"
        tone="critical"
      />
    </SketchFieldContainer>
  ),
  'TextField/With Positive Text': (
    <SketchFieldContainer>
      <TextField
        id="firstName4"
        label="Label"
        message="Positive text"
        tone="positive"
      />
    </SketchFieldContainer>
  )
};
