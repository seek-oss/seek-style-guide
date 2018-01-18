import React from 'react';
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

export const symbols = {
  'Button Group/Call to Action': (
    <ButtonGroup>
      <Button color="callToAction">Button 1</Button>
    </ButtonGroup>
  ),
  'Button Group/Call to Action + Hyperlink': (
    <ButtonGroup>
      <Button color="callToAction">Button 1</Button>
      <Button color="hyperlink">Button 2</Button>
    </ButtonGroup>
  ),
  'Button Group/Call to Action + Hyperlink + Transparent': (
    <ButtonGroup>
      <Button color="callToAction">Button 1</Button>
      <Button color="hyperlink">Button 2</Button>
      <Button color="transparent">Button 3</Button>
    </ButtonGroup>
  )
};
