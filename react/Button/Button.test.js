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

  function buttonType() {
    return button.type;
  }

  function buttonHasProp(prop) {
    return button.props[prop];
  }

  it('should have a displayName', () => {
    render(<Button color="blue">SEEK</Button>);
    expect(element.type.displayName).to.equal('Button');
  });

  it('should render button text', () => {
    render(<Button color="blue">SEEK</Button>);
    expect(buttonText()).to.equal('SEEK');
  });

  it('should render an normal html component based on its string name', () => {
    render(<Button color="blue" component="a">SEEK</Button>);
    expect(buttonType()).to.equal('a');
  });

  it('should pass through given props to the anchor', () => {
    render(<Button color="blue" component="a" href="https://www.seek.com.au">SEEK</Button>);
    expect(buttonHasProp('href')).to.equal('https://www.seek.com.au');
  });

  it('should render custom component based on it\'s reference', () => {
    const CustomComponent = props => <a {...props} />;
    render(<Button color="blue" component={CustomComponent}>SEEK</Button>);
    expect(buttonType()).to.equal(CustomComponent);
  });
});
