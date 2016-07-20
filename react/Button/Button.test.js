import { expect } from 'chai';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Button from './Button';

const renderer = createRenderer();

describe('Button', () => {
  let element, button;

  function render(jsx) {
    element = jsx;
    button = renderer.render(element);
  }

  function buttonText() {
    return button.props.children;
  }

  it('should have a displayName', () => {
    render(<Button color="blue">SEEK</Button>);
    expect(element.type.displayName).to.equal('Button');
  });

  it('should render button text', () => {
    render(<Button color="blue">SEEK</Button>);
    expect(buttonText()).to.equal('SEEK');
  });
});
