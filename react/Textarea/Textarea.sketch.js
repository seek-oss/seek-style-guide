import React from 'react';
import Textarea from './Textarea';
import styles from './Textarea.sketch.less';
import SketchFieldContainer from '../private/SketchFieldContainer/SketchFieldContainer';

const commonProps = {
  className: styles.root,
  label: 'Label',
  value: '',
  onChange: () => {},
  countFeedback: () => ({ count: 500 })
};

export const symbols = {
  'Textarea/Standard': (
    <SketchFieldContainer>
      <Textarea {...commonProps} id="textarea1" message={false} />
    </SketchFieldContainer>
  ),
  'Textarea/With Help Text': (
    <SketchFieldContainer>
      <Textarea {...commonProps} id="textarea2" message="Help text" />
    </SketchFieldContainer>
  ),
  'Textarea/With Critical Text': (
    <SketchFieldContainer>
      <Textarea
        {...commonProps}
        id="textarea3"
        message="Critical text"
        tone="critical"
        countFeedback={() => ({ count: -20 })}
      />
    </SketchFieldContainer>
  ),
  'Textarea/With Positive Text': (
    <SketchFieldContainer>
      <Textarea
        {...commonProps}
        id="textarea4"
        message="Positive text"
        tone="positive"
      />
    </SketchFieldContainer>
  )
};
