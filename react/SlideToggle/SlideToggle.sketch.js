import React from 'react';
import SlideToggle from './SlideToggle';

const noop = () => {};

export const symbols = {
  'Slide Toggle/Unchecked': (
    <SlideToggle
      id="myToggleUnchecked"
      label="Slide toggle"
      onChange={noop}
      checked={false}
    />
  ),
  'Slide Toggle/Checked': (
    <SlideToggle
      id="myToggleChecked"
      label="Slide toggle"
      onChange={noop}
      checked={true}
    />
  )
};
