import React from 'react';
import Dropdown from './Dropdown';
import styles from './Dropdown.sketch.less';
import SketchFieldContainer from '../private/SketchFieldContainer/SketchFieldContainer';

const commonProps = {
  className: styles.root,
  label: 'Label',
  placeholder: 'Placeholder text',
  options: [],
  value: '',
  onChange: () => {}
};

export const symbols = {
  'Dropdown/Standard': (
    <SketchFieldContainer>
      <Dropdown {...commonProps} id="dropdown1" message={false} />
    </SketchFieldContainer>
  ),
  'Dropdown/With Help Text': (
    <SketchFieldContainer>
      <Dropdown {...commonProps} id="dropdown2" message="Help text" />
    </SketchFieldContainer>
  ),
  'Dropdown/With Critical Text': (
    <SketchFieldContainer>
      <Dropdown {...commonProps} id="dropdown3" message="Critical text" valid={false} />
    </SketchFieldContainer>
  ),
  'Dropdown/With Positive Text': (
    <SketchFieldContainer>
      <Dropdown {...commonProps} id="dropdown4" message="Positive text" valid={true} />
    </SketchFieldContainer>
  )
};
