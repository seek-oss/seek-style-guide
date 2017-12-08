import React from 'react';
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

export const symbols = {
  'Button Group/Pink': (
    <ButtonGroup>
      <Button color="pink">Button 1</Button>
    </ButtonGroup>
  ),
  'Button Group/Pink Ghost': (
    <ButtonGroup>
      <Button color="pink" ghost>Button 1</Button>
    </ButtonGroup>
  ),
  'Button Group/Blue Ghost': (
    <ButtonGroup>
      <Button color="blue" ghost>Button 1</Button>
    </ButtonGroup>
  ),
  'Button Group/Pink + Blue': (
    <ButtonGroup>
      <Button color="pink">Button 1</Button>
      <Button color="blue">Button 2</Button>
    </ButtonGroup>
  ),
  'Button Group/Pink + Blue + Transparent': (
    <ButtonGroup>
      <Button color="pink">Button 1</Button>
      <Button color="blue">Button 2</Button>
      <Button color="transparent">Button 3</Button>
    </ButtonGroup>
  ),
  'Button Group/Pink + Transparent': (
    <ButtonGroup>
      <Button color="pink">Button 1</Button>
      <Button color="transparent">Button 2</Button>
    </ButtonGroup>
  ),
  'Button Group/Pink + Transparent x2': (
    <ButtonGroup>
      <Button color="pink">Button 1</Button>
      <Button color="transparent">Button 2</Button>
      <Button color="transparent">Button 3</Button>
    </ButtonGroup>
  )
};
