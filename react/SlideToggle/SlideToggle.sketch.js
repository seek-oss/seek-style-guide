import React from 'react';
import SlideToggle from './SlideToggle';

const noop = () => {};

export const symbols = {
  'Slide Toggle/Unchecked': <SlideToggle id="myToggle" label="Slide toggle" onChange={noop} checked={false} />,
  'Slide Toggle/Checked': <SlideToggle id="myToggle" label="Slide toggle" onChange={noop} checked={true} />
};
